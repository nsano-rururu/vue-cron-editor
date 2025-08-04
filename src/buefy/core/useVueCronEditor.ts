/**
 * useVueCronEditor
 * Core logic of the cron editor as a Vue 3 composable.
 * Functionality dependent on UI frameworks should be implemented in derived components
 */

import { ref, computed, watch, onMounted } from "vue-demi";
import * as cronValidator from "cron-validator";
import * as cronstrue from "cronstrue/i18n";
import { createI18n, toCronstrueLocale } from "./i18n";
import { UiState, CronSyntax } from "./expressionCommons";
import { parseExpression } from "./parseExpression";
import { buildExpression, TabKey, isStateValid } from "./buildExpression";

const initialData: Record<TabKey, UiState> = {
    minutes: {
        type: "minutes",
        minuteInterval: 1,
    },
    hourly: {
        type: "hourly",
        minutes: 0,
        hourInterval: 1,
    },
    daily: {
        type: "daily",
        minutes: 0,
        hours: 0,
        dayInterval: 1,
    },
    weekly: {
        type: "weekly",
        minutes: 0,
        hours: 0,
        days: ["MON"],
    },
    monthly: {
        type: "monthly",
        hours: 0,
        minutes: 0,
        day: 1,
        monthInterval: 1,
    },
    advanced: {
        type: "advanced",
        cronExpression: "",
    },
};

export interface VueCronEditorProps {
    value: string;
    visibleTabs: string[];
    preserveStateOnSwitchToAdvanced: boolean;
    locale: string;
    customLocales: Record<string, string> | null;
    cronSyntax: string;
}

export function useVueCronEditor(
    props: VueCronEditorProps,
    emit: (event: string, ...args: any[]) => void,
) {
    const innerValue = ref<string | null>(props.value || "*/1 * * * *");
    const editorData = ref<UiState>({ ...initialData.minutes });
    const currentTab = ref<TabKey>("minutes");
    const i18n = ref<Record<string, string> | null>(
        createI18n(props.customLocales, props.locale),
    );

    const explanation = computed((): string => {
        if (!innerValue.value) return "";

        const cronstrueLocale = toCronstrueLocale(props.locale);
        return (cronstrue as any).toString(innerValue.value, {
            locale: cronstrueLocale,
        });
    });

    function _$t(key: string) {
        return i18n.value?.[key] || key;
    }

    function __loadDataFromExpression() {
        const tabData = parseExpression(props.value);
        if (!props.visibleTabs.includes(tabData.type)) {
            editorData.value = {
                type: "advanced",
                cronExpression: props.value,
            };
            currentTab.value = "advanced";
            return;
        }
        editorData.value = { ...tabData };
        currentTab.value = tabData.type;
    }

    function __updateCronExpression(state: UiState) {
        if (!isStateValid(state)) {
            innerValue.value = null;
            emit("update:modelValue", null);
            return;
        }

        const cronExpression = buildExpression(props.cronSyntax as CronSyntax, {
            ...state,
        });

        if (!_isValidExpression(cronExpression)) {
            innerValue.value = null;
            emit("update:modelValue", null);
            return;
        }
        innerValue.value = cronExpression;
        emit("update:modelValue", cronExpression);
    }

    function _isValidExpression(cronExpression: string) {
        const options =
            props.cronSyntax == "quartz"
                ? {
                      seconds: true,
                      allowBlankDay: true,
                      alias: true,
                  }
                : undefined;
        return cronValidator.isValidCron(cronExpression, options);
    }

    function _resetToTab(tabKey: TabKey) {
        currentTab.value = tabKey;
        if (props.preserveStateOnSwitchToAdvanced && tabKey === "advanced") {
            editorData.value = {
                type: "advanced",
                cronExpression: innerValue.value as string,
            };
            return;
        }

        editorData.value = Object.assign({}, initialData[tabKey]);
        __updateCronExpression(initialData[tabKey]);
    }

    // Initialize data
    onMounted(() => {
        innerValue.value = props.value;
        __loadDataFromExpression();
    });

    // Watch for locale changes
    watch(
        () => props.locale,
        () => {
            i18n.value = createI18n(props.customLocales, props.locale);
        },
    );

    // Watch for value changes
    watch(
        () => props.value,
        () => {
            if (props.value == innerValue.value) {
                return;
            }
            __loadDataFromExpression();
        },
    );

    // Watch for cronSyntax changes
    watch(
        () => props.cronSyntax,
        () => {
            __updateCronExpression(
                JSON.parse(JSON.stringify(editorData.value)),
            );
        },
    );

    // Watch for editorData changes
    watch(
        editorData,
        (changedData) => {
            const nonReactiveData = JSON.parse(JSON.stringify(changedData));
            __updateCronExpression(nonReactiveData);
        },
        { deep: true },
    );

    return {
        innerValue,
        editorData,
        currentTab,
        i18n,
        explanation,
        _$t,
        _resetToTab,
        __loadDataFromExpression,
        __updateCronExpression,
    };
}
