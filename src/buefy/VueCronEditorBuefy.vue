<template>
    <div class="enable-bulma" :key="visibleTabs.join()">
        <b-tabs v-model="activeTab" @input="reset">
            <b-tab-item
                v-if="visibleTabs.includes('minutes')"
                value="0"
                :label="t('minutes')"
                class="minutes-tab"
            >
                <div class="card">
                    <b-field>
                        <span class="centered-text">{{ t("every") }}</span>
                        <b-numberinput
                            :controls="false"
                            v-model="editorData.minuteInterval"
                        />
                        <span class="centered-text">{{ t("mminutes") }}</span>
                    </b-field>
                </div>
            </b-tab-item>
            <b-tab-item
                v-if="visibleTabs.includes('hourly')"
                value="1"
                :label="t('hourly')"
                class="hourly-tab"
            >
                <div class="card">
                    <b-field>
                        <span class="centered-text">{{ t("every") }}</span>
                        <b-numberinput
                            :controls="false"
                            v-model="editorData.hourInterval"
                        />
                        <span class="centered-text">{{
                            t("hoursOnMinute")
                        }}</span>
                        <b-numberinput
                            :controls="false"
                            :min="0"
                            :max="59"
                            v-model="editorData.minutes"
                        />
                    </b-field>
                </div>
            </b-tab-item>

            <b-tab-item
                v-if="visibleTabs.includes('daily')"
                value="2"
                :label="t('daily')"
                class="daily-tab"
            >
                <div class="card">
                    <b-field>
                        <span class="centered-text">{{ t("every") }}</span>
                        <b-numberinput
                            :controls="false"
                            v-model="editorData.dayInterval"
                        />
                        <span class="centered-text">{{ t("daysAt") }}</span>
                        <b-timepicker
                            icon="clock"
                            editable
                            @input="setDateTime"
                            :value="dateTime"
                        />
                    </b-field>
                </div>
            </b-tab-item>

            <b-tab-item
                v-if="visibleTabs.includes('weekly')"
                value="3"
                :label="t('weekly')"
                class="weekly-tab"
            >
                <div class="card">
                    <b-field>
                        <span class="centered-text">{{ t("everyDay") }}</span>
                        <div class="centered-checkbox-group">
                            <b-checkbox
                                v-model="editorData.days"
                                native-value="SUN"
                            >
                                {{ t("sun") }}
                            </b-checkbox>
                            <b-checkbox
                                v-model="editorData.days"
                                native-value="MON"
                            >
                                {{ t("mon") }}
                            </b-checkbox>

                            <b-checkbox
                                v-model="editorData.days"
                                native-value="TUE"
                            >
                                {{ t("tue") }}
                            </b-checkbox>

                            <b-checkbox
                                v-model="editorData.days"
                                native-value="WED"
                            >
                                {{ t("wed") }}
                            </b-checkbox>

                            <b-checkbox
                                v-model="editorData.days"
                                native-value="THU"
                            >
                                {{ t("thu") }}
                            </b-checkbox>

                            <b-checkbox
                                v-model="editorData.days"
                                native-value="FRI"
                            >
                                {{ t("fri") }}
                            </b-checkbox>

                            <b-checkbox
                                v-model="editorData.days"
                                native-value="SAT"
                            >
                                {{ t("sat") }}
                            </b-checkbox>
                        </div>
                        <span class="centered-text">{{ t("at") }}</span>
                        <b-timepicker
                            icon="clock"
                            editable
                            @input="setDateTime"
                            :value="dateTime"
                        />
                    </b-field>
                </div>
            </b-tab-item>

            <b-tab-item
                v-if="visibleTabs.includes('monthly')"
                value="4"
                :label="t('monthly')"
                class="monthly-tab"
            >
                <div class="card">
                    <b-field>
                        <span class="centered-text">{{ t("onThe") }}</span>
                        <b-numberinput
                            :controls="false"
                            v-model="editorData.day"
                        />

                        <span class="centered-text">{{
                            t("dayOfEvery")
                        }}</span>
                        <b-numberinput
                            :min="1"
                            :max="12"
                            v-model="editorData.monthInterval"
                            :controls="false"
                        />

                        <span class="centered-text">{{ t("monthsAt") }}</span>
                        <b-timepicker
                            icon="clock"
                            editable
                            @input="setDateTime"
                            :value="dateTime"
                        />
                    </b-field>
                </div>
            </b-tab-item>

            <b-tab-item
                v-if="visibleTabs.includes('advanced')"
                value="5"
                :label="t('advanced')"
                class="advanced-tab"
            >
                <div class="card">
                    <b-field>
                        <span class="centered-text">{{
                            t("cronExpression")
                        }}</span>
                        <b-input v-model="editorData.cronExpression"></b-input>
                        <span class="centered-text">{{ explanation }}</span>
                    </b-field>
                </div>
            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted } from "vue-demi";
import { useVueCronEditor } from "./core/useVueCronEditor";
import { BField } from "buefy/dist/components/field";
import { BInput } from "buefy/dist/components/input";
import { BTabs, BTabItem } from "buefy/dist/components/tabs";
import { BTimepicker } from "buefy/dist/components/timepicker";
import { BNumberinput } from "buefy/dist/components/numberinput";
import { BCheckbox } from "buefy/dist/components/checkbox";

export default defineComponent({
    name: "VueCronEditorBuefy",
    components: {
        BField,
        BInput,
        BTabs,
        BTabItem,
        BTimepicker,
        BNumberinput,
        BCheckbox,
    },
    props: {
        value: {
            type: String,
            default: "*/1 * * * *",
        },
        modelValue: {
            type: String,
            default: "*/1 * * * *",
        },
        visibleTabs: {
            type: Array,
            default: () => [
                "minutes",
                "hourly",
                "daily",
                "weekly",
                "monthly",
                "advanced",
            ],
        },
        preserveStateOnSwitchToAdvanced: {
            type: Boolean,
            default: false,
        },
        locale: {
            type: String,
            default: "en",
        },
        customLocales: {
            type: Object,
            default: null,
        },
        cronSyntax: {
            type: String,
            default: "basic",
        },
    },
    emits: ["input", "update:modelValue"],
    setup(props, { emit }) {
        // Support both Vue 2 (value) and Vue 3 (modelValue) patterns
        const currentValue = computed(() => props.modelValue || props.value);

        // Create emit function that works for both Vue 2 and Vue 3
        const emitFunction = (event: string, value: string | null) => {
            emit("input", value); // Vue 2 style
            emit("update:modelValue", value); // Vue 3 style
        };

        // Use the composable
        const {
            innerValue,
            editorData,
            currentTab,
            i18n,
            explanation,
            _$t,
            _resetToTab,
            __loadDataFromExpression,
            __updateCronExpression,
        } = useVueCronEditor(
            {
                value: currentValue.value,
                visibleTabs: props.visibleTabs,
                preserveStateOnSwitchToAdvanced:
                    props.preserveStateOnSwitchToAdvanced,
                locale: props.locale,
                customLocales: props.customLocales,
                cronSyntax: props.cronSyntax,
            },
            emitFunction,
        );

        const activeTab = ref<string | null>(null);
        const tabs = ref([
            { id: "0", key: "minutes" },
            { id: "1", key: "hourly" },
            { id: "2", key: "daily" },
            { id: "3", key: "weekly" },
            { id: "4", key: "monthly" },
            { id: "5", key: "advanced" },
        ]);

        const dateTime = computed(() => {
            let dateTime = new Date();
            dateTime.setHours(editorData.value.hours || 0);
            dateTime.setMinutes(editorData.value.minutes || 0);
            return dateTime;
        });

        function reset(e: string) {
            const tabKey = tabs.value.find((t) => t.id === e)?.key;
            if (tabKey) {
                _resetToTab(tabKey as any);
            }
        }

        function setDateTime(e: Date | null) {
            if (e == null) {
                return;
            }
            editorData.value.hours = e.getHours();
            editorData.value.minutes = e.getMinutes();
        }

        // Watch for prop changes
        watch(
            () => currentValue.value,
            (newValue) => {
                if (newValue !== innerValue.value) {
                    __loadDataFromExpression();
                }
            },
        );

        onMounted(() => {
            activeTab.value =
                tabs.value.find((t) => t.key === currentTab.value)?.id || null;
        });

        watch(currentTab, () => {
            activeTab.value =
                tabs.value.find((t) => t.key === currentTab.value)?.id || null;
        });

        return {
            activeTab,
            tabs,
            dateTime,
            reset,
            setDateTime,
            innerValue,
            editorData,
            currentTab,
            i18n,
            explanation,
            t: _$t,
            resetToTab: _resetToTab,
            loadDataFromExpression: __loadDataFromExpression,
            updateCronExpression: __updateCronExpression,
        };
    },
});
</script>

<style lang="scss">
.enable-bulma {
    .control {
        display: flex;
        align-items: center;
    }

    .centered-text {
        padding-left: 16px;
        padding-right: 16px;
        justify-content: center;
        align-items: center;
        text-align: center;
        display: flex;
    }

    .centered-checkbox-group {
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        display: flex;
    }

    /* Import pre-built CSS instead of SCSS to avoid build issues */
    @import "../../../node_modules/bulma/css/bulma.min.css";
    @import "../../../node_modules/buefy/dist/buefy.css";
}
</style>
