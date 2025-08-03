<template>
    <div class="enable-bulma" :key="visibleTabs.join()">
        <b-tabs v-model="activeTab" @input="reset">
            <b-tab-item
                v-if="visibleTabs.includes('minutes')"
                value="0"
                :label="_$t('minutes')"
                class="minutes-tab"
            >
                <div class="card">
                    <b-field>
                        <span class="centered-text">{{ _$t("every") }}</span>
                        <b-numberinput
                            :controls="false"
                            v-model="editorData.minuteInterval"
                        />
                        <span class="centered-text">{{ _$t("mminutes") }}</span>
                    </b-field>
                </div>
            </b-tab-item>
            <b-tab-item
                v-if="props.visibleTabs.includes('hourly')"
                value="1"
                :label="_$t('hourly')"
                class="hourly-tab"
            >
                <div class="card">
                    <b-field>
                        <span class="centered-text">{{ _$t("every") }}</span>
                        <b-numberinput
                            :controls="false"
                            v-model="editorData.hourInterval"
                        />
                        <span class="centered-text">{{
                            _$t("hoursOnMinute")
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
                v-if="props.visibleTabs.includes('daily')"
                value="2"
                :label="_$t('daily')"
                class="daily-tab"
            >
                <div class="card">
                    <b-field>
                        <span class="centered-text">{{ _$t("every") }}</span>
                        <b-numberinput
                            :controls="false"
                            v-model="editorData.dayInterval"
                        />
                        <span class="centered-text">{{ _$t("daysAt") }}</span>
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
                v-if="props.visibleTabs.includes('weekly')"
                value="3"
                :label="_$t('weekly')"
                class="weekly-tab"
            >
                <div class="card">
                    <b-field>
                        <span class="centered-text">{{ _$t("everyDay") }}</span>
                        <div class="centered-checkbox-group">
                            <b-checkbox
                                v-model="editorData.days"
                                native-value="SUN"
                            >
                                {{ _$t("sun") }}
                            </b-checkbox>
                            <b-checkbox
                                v-model="editorData.days"
                                native-value="MON"
                            >
                                {{ _$t("mon") }}
                            </b-checkbox>

                            <b-checkbox
                                v-model="editorData.days"
                                native-value="TUE"
                            >
                                {{ _$t("tue") }}
                            </b-checkbox>

                            <b-checkbox
                                v-model="editorData.days"
                                native-value="WED"
                            >
                                {{ _$t("wed") }}
                            </b-checkbox>

                            <b-checkbox
                                v-model="editorData.days"
                                native-value="THU"
                            >
                                {{ _$t("thu") }}
                            </b-checkbox>

                            <b-checkbox
                                v-model="editorData.days"
                                native-value="FRI"
                            >
                                {{ _$t("fri") }}
                            </b-checkbox>

                            <b-checkbox
                                v-model="editorData.days"
                                native-value="SAT"
                            >
                                {{ _$t("sat") }}
                            </b-checkbox>
                        </div>
                        <span class="centered-text">{{ _$t("at") }}</span>
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
                v-if="props.visibleTabs.includes('monthly')"
                value="4"
                :label="_$t('monthly')"
                class="monthly-tab"
            >
                <div class="card">
                    <b-field>
                        <span class="centered-text">{{ _$t("onThe") }}</span>
                        <b-numberinput
                            :controls="false"
                            v-model="editorData.day"
                        />

                        <span class="centered-text">{{
                            _$t("dayOfEvery")
                        }}</span>
                        <b-numberinput
                            :min="1"
                            :max="12"
                            v-model="editorData.monthInterval"
                            :controls="false"
                        />

                        <span class="centered-text">{{ _$t("monthsAt") }}</span>
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
                v-if="props.visibleTabs.includes('advanced')"
                value="5"
                :label="_$t('advanced')"
                class="advanced-tab"
            >
                <div class="card">
                    <b-field>
                        <span class="centered-text">{{
                            _$t("cronExpression")
                        }}</span>
                        <b-input v-model="editorData.cronExpression"></b-input>
                        <span class="centered-text">{{ explanation }}</span>
                    </b-field>
                </div>
            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useVueCronEditor } from "./core/useVueCronEditor";
import { BField } from "buefy/dist/components/field";
import { BInput } from "buefy/dist/components/input";
import { BTabs, BTabItem } from "buefy/dist/components/tabs";
import { BTimepicker } from "buefy/dist/components/timepicker";
import { BNumberinput } from "buefy/dist/components/numberinput";
import { BCheckbox } from "buefy/dist/components/checkbox";

interface Props {
    modelValue?: string
    visibleTabs?: string[]
    preserveStateOnSwitchToAdvanced?: boolean
    locale?: string
    customLocales?: Record<string, string> | null
    cronSyntax?: string
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: "*/1 * * * *",
    visibleTabs: () => [
        "minutes",
        "hourly", 
        "daily",
        "weekly",
        "monthly",
        "advanced"
    ],
    preserveStateOnSwitchToAdvanced: false,
    locale: "en",
    customLocales: null,
    cronSyntax: "basic"
})

const emit = defineEmits<{
    'update:modelValue': [value: string | null]
}>()

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
    __updateCronExpression
} = useVueCronEditor({
    value: props.modelValue,
    visibleTabs: props.visibleTabs,
    preserveStateOnSwitchToAdvanced: props.preserveStateOnSwitchToAdvanced,
    locale: props.locale,
    customLocales: props.customLocales,
    cronSyntax: props.cronSyntax
}, emit)

const activeTab = ref<string | null>(null)
const tabs = ref([
    { id: "0", key: "minutes" },
    { id: "1", key: "hourly" },
    { id: "2", key: "daily" },
    { id: "3", key: "weekly" },
    { id: "4", key: "monthly" },
    { id: "5", key: "advanced" }
])

const dateTime = computed(() => {
    let dateTime = new Date();
    dateTime.setHours(editorData.value.hours || 0);
    dateTime.setMinutes(editorData.value.minutes || 0);
    return dateTime;
})

function reset(e: string) {
    const tabKey = tabs.value.find(t => t.id === e)?.key;
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

onMounted(() => {
    activeTab.value = tabs.value.find(t => t.key === currentTab.value)?.id || null;
})

watch(currentTab, () => {
    activeTab.value = tabs.value.find(t => t.key === currentTab.value)?.id || null;
})
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
