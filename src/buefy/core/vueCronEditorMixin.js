/**
 * vueCronEditorMixin
 * Core logic of a component.
 * Functionality dependent on UI frameworks should be implemented in derived components
 */
import * as cronValidator from "cron-validator";
import * as cronstrue from "cronstrue/i18n";
import { createI18n, toCronstrueLocale } from "./i18n";
import Vue from "vue";
import { parseExpression } from "./parseExpression";
import { buildExpression, isStateValid } from "./buildExpression";
const initialData = {
    minutes: {
        type: "minutes",
        minuteInterval: 1
    },
    hourly: {
        type: "hourly",
        minutes: 0,
        hourInterval: 1
    },
    daily: {
        type: "daily",
        minutes: 0,
        hours: 0,
        dayInterval: 1
    },
    weekly: {
        type: "weekly",
        minutes: 0,
        hours: 0,
        days: ["MON"]
    },
    monthly: {
        type: "monthly",
        hours: 0,
        minutes: 0,
        day: 1,
        monthInterval: 1
    },
    advanced: {
        type: "advanced",
        cronExpression: ""
    }
};
export default Vue.extend({
    created() {
        this.i18n = createI18n(this.customLocales, this.locale);
        this.innerValue = this.value;
        this.__loadDataFromExpression();
    },
    props: {
        value: { type: String, default: "*/1 * * * *" },
        visibleTabs: {
            type: Array,
            default() {
                return [
                    "minutes",
                    "hourly",
                    "daily",
                    "weekly",
                    "monthly",
                    "advanced"
                ];
            }
        },
        preserveStateOnSwitchToAdvanced: { type: Boolean, default: false },
        locale: { type: String, default: "en" },
        customLocales: { type: Object, default: null },
        cronSyntax: { type: String, default: "basic" }
    },
    data() {
        return {
            innerValue: "*/1 * * * *",
            editorData: Object.assign({}, initialData.minutes),
            currentTab: "minutes",
            i18n: null
        };
    },
    computed: {
        explanation() {
            if (!this.innerValue)
                return "";
            const cronstrueLocale = toCronstrueLocale(this.locale);
            return cronstrue.toString(this.innerValue, {
                locale: cronstrueLocale
            });
        }
    },
    methods: {
        _$t(key) {
            return this.i18n[key];
        },
        __loadDataFromExpression() {
            const tabData = parseExpression(this.value);
            if (!this.visibleTabs.includes(tabData.type)) {
                this.editorData = {
                    type: "advanced",
                    cronExpression: this.value
                };
                this.currentTab = "advanced";
                return;
            }
            this.editorData = { ...tabData };
            this.currentTab = tabData.type;
        },
        __updateCronExpression(state) {
            if (!isStateValid(state)) {
                this.innerValue = null;
                this.$emit("input", null);
                return;
            }
            const cronExpression = buildExpression(this.cronSyntax, {
                ...state
            });
            if (!this._isValidExpression(cronExpression)) {
                this.innerValue = null;
                this.$emit("input", null);
                return;
            }
            this.innerValue = cronExpression;
            this.$emit("input", cronExpression);
        },
        _isValidExpression(cronExpression) {
            let options = this.cronSyntax == "quartz"
                ? {
                    seconds: true,
                    allowBlankDay: true,
                    alias: true
                }
                : undefined;
            return cronValidator.isValidCron(cronExpression, options);
        },
        _resetToTab(tabKey) {
            this.currentTab = tabKey;
            if (this.preserveStateOnSwitchToAdvanced && tabKey === "advanced") {
                this.editorData = {
                    type: "advanced",
                    cronExpression: this.innerValue
                };
                return;
            }
            this.editorData = Object.assign({}, initialData[tabKey]);
            this.__updateCronExpression(initialData[tabKey]);
        }
    },
    watch: {
        locale() {
            this.i18n = createI18n(this.customLocales, this.locale);
        },
        value: {
            handler() {
                if (this.value == this.innerValue) {
                    return;
                }
                this.__loadDataFromExpression();
            }
        },
        cronSyntax() {
            this.__updateCronExpression(JSON.parse(JSON.stringify(this.editorData)));
        },
        editorData: {
            deep: true,
            handler(changedData) {
                const nonReactiveData = JSON.parse(JSON.stringify(changedData));
                this.__updateCronExpression(nonReactiveData);
            }
        }
    }
});
//# sourceMappingURL=vueCronEditorMixin.js.map