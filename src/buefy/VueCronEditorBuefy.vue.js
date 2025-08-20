/// <reference types="../../node_modules/.vue-global-types/vue_2.7_0_0_0.d.ts" />
import vueCronEditorMixin from "./core/vueCronEditorMixin";
import { BField } from "buefy/dist/components/field";
import { BInput } from "buefy/dist/components/input";
import { BTabs, BTabItem } from "buefy/dist/components/tabs";
import { BTimepicker } from "buefy/dist/components/timepicker";
import { BNumberinput } from "buefy/dist/components/numberinput";
import { BCheckbox } from "buefy/dist/components/checkbox";
export default (await import('vue')).defineComponent({
    name: "VueCronEditorBuefy",
    mixins: [vueCronEditorMixin],
    components: {
        BField,
        BInput,
        BTabs,
        BTabItem,
        BTimepicker,
        BNumberinput,
        BCheckbox
    },
    data: () => ({
        activeTab: null,
        tabs: [
            { id: "0", key: "minutes" },
            { id: "1", key: "hourly" },
            { id: "2", key: "daily" },
            { id: "3", key: "weekly" },
            { id: "4", key: "monthly" },
            { id: "5", key: "advanced" }
        ]
    }),
    mounted() {
        this.activeTab = this.tabs.find(t => t.key === this.currentTab).id;
    },
    watch: {
        currentTab() {
            this.activeTab = this.tabs.find(t => t.key === this.currentTab).id;
        }
    },
    computed: {
        dateTime() {
            let dateTime = new Date();
            dateTime.setHours(this.editorData.hours);
            dateTime.setMinutes(this.editorData.minutes);
            return dateTime;
        }
    },
    methods: {
        reset(e) {
            const tabKey = this.tabs.find(t => t.id === e).key;
            this._resetToTab(tabKey);
        },
        setDateTime(e) {
            if (e == null) {
                return;
            }
            this.editorData.hours = e.getHours();
            this.editorData.minutes = e.getMinutes();
        }
    }
});
const __VLS_ctx = {};
const __VLS_componentsOption = {
    BField,
    BInput,
    BTabs,
    BTabItem,
    BTimepicker,
    BNumberinput,
    BCheckbox
};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "enable-bulma" },
    key: (__VLS_ctx.visibleTabs.join()),
});
const __VLS_0 = {}.BTabs;
/** @type {[typeof __VLS_components.BTabs, typeof __VLS_components.bTabs, typeof __VLS_components.BTabs, typeof __VLS_components.bTabs, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onInput': {} },
    value: (__VLS_ctx.activeTab),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onInput': {} },
    value: (__VLS_ctx.activeTab),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onInput: (__VLS_ctx.reset)
};
__VLS_3.slots.default;
if (__VLS_ctx.visibleTabs.includes('minutes')) {
    const __VLS_8 = {}.BTabItem;
    /** @type {[typeof __VLS_components.BTabItem, typeof __VLS_components.bTabItem, typeof __VLS_components.BTabItem, typeof __VLS_components.bTabItem, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        value: "0",
        label: (__VLS_ctx._$t('minutes')),
        ...{ class: "minutes-tab" },
    }));
    const __VLS_10 = __VLS_9({
        value: "0",
        label: (__VLS_ctx._$t('minutes')),
        ...{ class: "minutes-tab" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_11.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "card" },
    });
    const __VLS_12 = {}.BField;
    /** @type {[typeof __VLS_components.BField, typeof __VLS_components.bField, typeof __VLS_components.BField, typeof __VLS_components.bField, ]} */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_15.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "centered-text" },
    });
    (__VLS_ctx._$t("every"));
    const __VLS_16 = {}.BNumberinput;
    /** @type {[typeof __VLS_components.BNumberinput, typeof __VLS_components.bNumberinput, ]} */ ;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
        controls: (false),
        value: (__VLS_ctx.editorData.minuteInterval),
    }));
    const __VLS_18 = __VLS_17({
        controls: (false),
        value: (__VLS_ctx.editorData.minuteInterval),
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "centered-text" },
    });
    (__VLS_ctx._$t("mminutes"));
    var __VLS_15;
    var __VLS_11;
}
if (__VLS_ctx.visibleTabs.includes('hourly')) {
    const __VLS_20 = {}.BTabItem;
    /** @type {[typeof __VLS_components.BTabItem, typeof __VLS_components.bTabItem, typeof __VLS_components.BTabItem, typeof __VLS_components.bTabItem, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        value: "1",
        label: (__VLS_ctx._$t('hourly')),
        ...{ class: "hourly-tab" },
    }));
    const __VLS_22 = __VLS_21({
        value: "1",
        label: (__VLS_ctx._$t('hourly')),
        ...{ class: "hourly-tab" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_23.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "card" },
    });
    const __VLS_24 = {}.BField;
    /** @type {[typeof __VLS_components.BField, typeof __VLS_components.bField, typeof __VLS_components.BField, typeof __VLS_components.bField, ]} */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_27.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "centered-text" },
    });
    (__VLS_ctx._$t("every"));
    const __VLS_28 = {}.BNumberinput;
    /** @type {[typeof __VLS_components.BNumberinput, typeof __VLS_components.bNumberinput, ]} */ ;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
        controls: (false),
        value: (__VLS_ctx.editorData.hourInterval),
    }));
    const __VLS_30 = __VLS_29({
        controls: (false),
        value: (__VLS_ctx.editorData.hourInterval),
    }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "centered-text" },
    });
    (__VLS_ctx._$t("hoursOnMinute"));
    const __VLS_32 = {}.BNumberinput;
    /** @type {[typeof __VLS_components.BNumberinput, typeof __VLS_components.bNumberinput, ]} */ ;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
        controls: (false),
        min: (0),
        max: (59),
        value: (__VLS_ctx.editorData.minutes),
    }));
    const __VLS_34 = __VLS_33({
        controls: (false),
        min: (0),
        max: (59),
        value: (__VLS_ctx.editorData.minutes),
    }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    var __VLS_27;
    var __VLS_23;
}
if (__VLS_ctx.visibleTabs.includes('daily')) {
    const __VLS_36 = {}.BTabItem;
    /** @type {[typeof __VLS_components.BTabItem, typeof __VLS_components.bTabItem, typeof __VLS_components.BTabItem, typeof __VLS_components.bTabItem, ]} */ ;
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
        value: "2",
        label: (__VLS_ctx._$t('daily')),
        ...{ class: "daily-tab" },
    }));
    const __VLS_38 = __VLS_37({
        value: "2",
        label: (__VLS_ctx._$t('daily')),
        ...{ class: "daily-tab" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_39.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "card" },
    });
    const __VLS_40 = {}.BField;
    /** @type {[typeof __VLS_components.BField, typeof __VLS_components.bField, typeof __VLS_components.BField, typeof __VLS_components.bField, ]} */ ;
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({}));
    const __VLS_42 = __VLS_41({}, ...__VLS_functionalComponentArgsRest(__VLS_41));
    __VLS_43.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "centered-text" },
    });
    (__VLS_ctx._$t("every"));
    const __VLS_44 = {}.BNumberinput;
    /** @type {[typeof __VLS_components.BNumberinput, typeof __VLS_components.bNumberinput, ]} */ ;
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
        controls: (false),
        value: (__VLS_ctx.editorData.dayInterval),
    }));
    const __VLS_46 = __VLS_45({
        controls: (false),
        value: (__VLS_ctx.editorData.dayInterval),
    }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "centered-text" },
    });
    (__VLS_ctx._$t("daysAt"));
    const __VLS_48 = {}.BTimepicker;
    /** @type {[typeof __VLS_components.BTimepicker, typeof __VLS_components.bTimepicker, ]} */ ;
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
        ...{ 'onInput': {} },
        icon: "clock",
        editable: true,
        value: (__VLS_ctx.dateTime),
    }));
    const __VLS_50 = __VLS_49({
        ...{ 'onInput': {} },
        icon: "clock",
        editable: true,
        value: (__VLS_ctx.dateTime),
    }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    let __VLS_52;
    let __VLS_53;
    let __VLS_54;
    const __VLS_55 = {
        onInput: (__VLS_ctx.setDateTime)
    };
    var __VLS_51;
    var __VLS_43;
    var __VLS_39;
}
if (__VLS_ctx.visibleTabs.includes('weekly')) {
    const __VLS_56 = {}.BTabItem;
    /** @type {[typeof __VLS_components.BTabItem, typeof __VLS_components.bTabItem, typeof __VLS_components.BTabItem, typeof __VLS_components.bTabItem, ]} */ ;
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
        value: "3",
        label: (__VLS_ctx._$t('weekly')),
        ...{ class: "weekly-tab" },
    }));
    const __VLS_58 = __VLS_57({
        value: "3",
        label: (__VLS_ctx._$t('weekly')),
        ...{ class: "weekly-tab" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    __VLS_59.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "card" },
    });
    const __VLS_60 = {}.BField;
    /** @type {[typeof __VLS_components.BField, typeof __VLS_components.bField, typeof __VLS_components.BField, typeof __VLS_components.bField, ]} */ ;
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
    const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
    __VLS_63.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "centered-text" },
    });
    (__VLS_ctx._$t("everyDay"));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "centered-checkbox-group" },
    });
    const __VLS_64 = {}.BCheckbox;
    /** @type {[typeof __VLS_components.BCheckbox, typeof __VLS_components.bCheckbox, typeof __VLS_components.BCheckbox, typeof __VLS_components.bCheckbox, ]} */ ;
    // @ts-ignore
    const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
        value: (__VLS_ctx.editorData.days),
        nativeValue: "SUN",
    }));
    const __VLS_66 = __VLS_65({
        value: (__VLS_ctx.editorData.days),
        nativeValue: "SUN",
    }, ...__VLS_functionalComponentArgsRest(__VLS_65));
    __VLS_67.slots.default;
    (__VLS_ctx._$t("sun"));
    var __VLS_67;
    const __VLS_68 = {}.BCheckbox;
    /** @type {[typeof __VLS_components.BCheckbox, typeof __VLS_components.bCheckbox, typeof __VLS_components.BCheckbox, typeof __VLS_components.bCheckbox, ]} */ ;
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
        value: (__VLS_ctx.editorData.days),
        nativeValue: "MON",
    }));
    const __VLS_70 = __VLS_69({
        value: (__VLS_ctx.editorData.days),
        nativeValue: "MON",
    }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    __VLS_71.slots.default;
    (__VLS_ctx._$t("mon"));
    var __VLS_71;
    const __VLS_72 = {}.BCheckbox;
    /** @type {[typeof __VLS_components.BCheckbox, typeof __VLS_components.bCheckbox, typeof __VLS_components.BCheckbox, typeof __VLS_components.bCheckbox, ]} */ ;
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
        value: (__VLS_ctx.editorData.days),
        nativeValue: "TUE",
    }));
    const __VLS_74 = __VLS_73({
        value: (__VLS_ctx.editorData.days),
        nativeValue: "TUE",
    }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    __VLS_75.slots.default;
    (__VLS_ctx._$t("tue"));
    var __VLS_75;
    const __VLS_76 = {}.BCheckbox;
    /** @type {[typeof __VLS_components.BCheckbox, typeof __VLS_components.bCheckbox, typeof __VLS_components.BCheckbox, typeof __VLS_components.bCheckbox, ]} */ ;
    // @ts-ignore
    const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
        value: (__VLS_ctx.editorData.days),
        nativeValue: "WED",
    }));
    const __VLS_78 = __VLS_77({
        value: (__VLS_ctx.editorData.days),
        nativeValue: "WED",
    }, ...__VLS_functionalComponentArgsRest(__VLS_77));
    __VLS_79.slots.default;
    (__VLS_ctx._$t("wed"));
    var __VLS_79;
    const __VLS_80 = {}.BCheckbox;
    /** @type {[typeof __VLS_components.BCheckbox, typeof __VLS_components.bCheckbox, typeof __VLS_components.BCheckbox, typeof __VLS_components.bCheckbox, ]} */ ;
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
        value: (__VLS_ctx.editorData.days),
        nativeValue: "THU",
    }));
    const __VLS_82 = __VLS_81({
        value: (__VLS_ctx.editorData.days),
        nativeValue: "THU",
    }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    __VLS_83.slots.default;
    (__VLS_ctx._$t("thu"));
    var __VLS_83;
    const __VLS_84 = {}.BCheckbox;
    /** @type {[typeof __VLS_components.BCheckbox, typeof __VLS_components.bCheckbox, typeof __VLS_components.BCheckbox, typeof __VLS_components.bCheckbox, ]} */ ;
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
        value: (__VLS_ctx.editorData.days),
        nativeValue: "FRI",
    }));
    const __VLS_86 = __VLS_85({
        value: (__VLS_ctx.editorData.days),
        nativeValue: "FRI",
    }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    __VLS_87.slots.default;
    (__VLS_ctx._$t("fri"));
    var __VLS_87;
    const __VLS_88 = {}.BCheckbox;
    /** @type {[typeof __VLS_components.BCheckbox, typeof __VLS_components.bCheckbox, typeof __VLS_components.BCheckbox, typeof __VLS_components.bCheckbox, ]} */ ;
    // @ts-ignore
    const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({
        value: (__VLS_ctx.editorData.days),
        nativeValue: "SAT",
    }));
    const __VLS_90 = __VLS_89({
        value: (__VLS_ctx.editorData.days),
        nativeValue: "SAT",
    }, ...__VLS_functionalComponentArgsRest(__VLS_89));
    __VLS_91.slots.default;
    (__VLS_ctx._$t("sat"));
    var __VLS_91;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "centered-text" },
    });
    (__VLS_ctx._$t("at"));
    const __VLS_92 = {}.BTimepicker;
    /** @type {[typeof __VLS_components.BTimepicker, typeof __VLS_components.bTimepicker, ]} */ ;
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({
        ...{ 'onInput': {} },
        icon: "clock",
        editable: true,
        value: (__VLS_ctx.dateTime),
    }));
    const __VLS_94 = __VLS_93({
        ...{ 'onInput': {} },
        icon: "clock",
        editable: true,
        value: (__VLS_ctx.dateTime),
    }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    let __VLS_96;
    let __VLS_97;
    let __VLS_98;
    const __VLS_99 = {
        onInput: (__VLS_ctx.setDateTime)
    };
    var __VLS_95;
    var __VLS_63;
    var __VLS_59;
}
if (__VLS_ctx.visibleTabs.includes('monthly')) {
    const __VLS_100 = {}.BTabItem;
    /** @type {[typeof __VLS_components.BTabItem, typeof __VLS_components.bTabItem, typeof __VLS_components.BTabItem, typeof __VLS_components.bTabItem, ]} */ ;
    // @ts-ignore
    const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({
        value: "4",
        label: (__VLS_ctx._$t('monthly')),
        ...{ class: "monthly-tab" },
    }));
    const __VLS_102 = __VLS_101({
        value: "4",
        label: (__VLS_ctx._$t('monthly')),
        ...{ class: "monthly-tab" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_101));
    __VLS_103.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "card" },
    });
    const __VLS_104 = {}.BField;
    /** @type {[typeof __VLS_components.BField, typeof __VLS_components.bField, typeof __VLS_components.BField, typeof __VLS_components.bField, ]} */ ;
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({}));
    const __VLS_106 = __VLS_105({}, ...__VLS_functionalComponentArgsRest(__VLS_105));
    __VLS_107.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "centered-text" },
    });
    (__VLS_ctx._$t("onThe"));
    const __VLS_108 = {}.BNumberinput;
    /** @type {[typeof __VLS_components.BNumberinput, typeof __VLS_components.bNumberinput, ]} */ ;
    // @ts-ignore
    const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({
        controls: (false),
        value: (__VLS_ctx.editorData.day),
    }));
    const __VLS_110 = __VLS_109({
        controls: (false),
        value: (__VLS_ctx.editorData.day),
    }, ...__VLS_functionalComponentArgsRest(__VLS_109));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "centered-text" },
    });
    (__VLS_ctx._$t("dayOfEvery"));
    const __VLS_112 = {}.BNumberinput;
    /** @type {[typeof __VLS_components.BNumberinput, typeof __VLS_components.bNumberinput, ]} */ ;
    // @ts-ignore
    const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({
        min: (1),
        max: (12),
        value: (__VLS_ctx.editorData.monthInterval),
        controls: (false),
    }));
    const __VLS_114 = __VLS_113({
        min: (1),
        max: (12),
        value: (__VLS_ctx.editorData.monthInterval),
        controls: (false),
    }, ...__VLS_functionalComponentArgsRest(__VLS_113));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "centered-text" },
    });
    (__VLS_ctx._$t("monthsAt"));
    const __VLS_116 = {}.BTimepicker;
    /** @type {[typeof __VLS_components.BTimepicker, typeof __VLS_components.bTimepicker, ]} */ ;
    // @ts-ignore
    const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({
        ...{ 'onInput': {} },
        icon: "clock",
        editable: true,
        value: (__VLS_ctx.dateTime),
    }));
    const __VLS_118 = __VLS_117({
        ...{ 'onInput': {} },
        icon: "clock",
        editable: true,
        value: (__VLS_ctx.dateTime),
    }, ...__VLS_functionalComponentArgsRest(__VLS_117));
    let __VLS_120;
    let __VLS_121;
    let __VLS_122;
    const __VLS_123 = {
        onInput: (__VLS_ctx.setDateTime)
    };
    var __VLS_119;
    var __VLS_107;
    var __VLS_103;
}
if (__VLS_ctx.visibleTabs.includes('advanced')) {
    const __VLS_124 = {}.BTabItem;
    /** @type {[typeof __VLS_components.BTabItem, typeof __VLS_components.bTabItem, typeof __VLS_components.BTabItem, typeof __VLS_components.bTabItem, ]} */ ;
    // @ts-ignore
    const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({
        value: "5",
        label: (__VLS_ctx._$t('advanced')),
        ...{ class: "advanced-tab" },
    }));
    const __VLS_126 = __VLS_125({
        value: "5",
        label: (__VLS_ctx._$t('advanced')),
        ...{ class: "advanced-tab" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_125));
    __VLS_127.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "card" },
    });
    const __VLS_128 = {}.BField;
    /** @type {[typeof __VLS_components.BField, typeof __VLS_components.bField, typeof __VLS_components.BField, typeof __VLS_components.bField, ]} */ ;
    // @ts-ignore
    const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({}));
    const __VLS_130 = __VLS_129({}, ...__VLS_functionalComponentArgsRest(__VLS_129));
    __VLS_131.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "centered-text" },
    });
    (__VLS_ctx._$t("cronExpression"));
    const __VLS_132 = {}.BInput;
    /** @type {[typeof __VLS_components.BInput, typeof __VLS_components.bInput, typeof __VLS_components.BInput, typeof __VLS_components.bInput, ]} */ ;
    // @ts-ignore
    const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({
        value: (__VLS_ctx.editorData.cronExpression),
    }));
    const __VLS_134 = __VLS_133({
        value: (__VLS_ctx.editorData.cronExpression),
    }, ...__VLS_functionalComponentArgsRest(__VLS_133));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "centered-text" },
    });
    (__VLS_ctx.explanation);
    var __VLS_131;
    var __VLS_127;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['enable-bulma']} */ ;
/** @type {__VLS_StyleScopedClasses['minutes-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['centered-text']} */ ;
/** @type {__VLS_StyleScopedClasses['centered-text']} */ ;
/** @type {__VLS_StyleScopedClasses['hourly-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['centered-text']} */ ;
/** @type {__VLS_StyleScopedClasses['centered-text']} */ ;
/** @type {__VLS_StyleScopedClasses['daily-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['centered-text']} */ ;
/** @type {__VLS_StyleScopedClasses['centered-text']} */ ;
/** @type {__VLS_StyleScopedClasses['weekly-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['centered-text']} */ ;
/** @type {__VLS_StyleScopedClasses['centered-checkbox-group']} */ ;
/** @type {__VLS_StyleScopedClasses['centered-text']} */ ;
/** @type {__VLS_StyleScopedClasses['monthly-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['centered-text']} */ ;
/** @type {__VLS_StyleScopedClasses['centered-text']} */ ;
/** @type {__VLS_StyleScopedClasses['centered-text']} */ ;
/** @type {__VLS_StyleScopedClasses['advanced-tab']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['centered-text']} */ ;
/** @type {__VLS_StyleScopedClasses['centered-text']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=VueCronEditorBuefy.vue.js.map