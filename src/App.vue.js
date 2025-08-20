/// <reference types="../node_modules/.vue-global-types/vue_2.7_0_0_0.d.ts" />
import VueCronEditorBuefy from "./buefy/VueCronEditorBuefy.vue";
import { defaultLocales } from "./buefy/core/i18n";
export default (await import('vue')).defineComponent({
    name: "App",
    components: {
        VueCronEditorBuefy
    },
    methods: {
        editItem(item) {
            this.editedIndex = this.expressions.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
        deleteItem(item) {
            const index = this.expressions.indexOf(item);
            confirm("Are you sure you want to delete this item?") &&
                this.expressions.splice(index, 1);
        },
        close() {
            this.dialog = false;
            setTimeout(() => {
                this.editedIndex = -1;
                this.editedItem = {};
            }, 300);
        },
        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.expressions[this.editedIndex], this.editedItem);
            }
            else {
                const newIndex = this.expressions.push(this.editedItem);
                this.expressions[newIndex - 1].id = newIndex;
            }
            this.close();
        }
    },
    data: () => ({
        sample1CronExpression: "4 4 * * 0,2,3,5",
        headers: [
            { text: "Id", value: "id" },
            { text: "Expression", value: "expression" },
            { text: "Actions", value: "actions", sortable: false }
        ],
        expressions: [{ expression: "4 4 * * 0,2,3,5", id: 0 }],
        editedItem: {},
        dialog: false,
        editedIndex: -1,
        locales: Object.keys(defaultLocales),
        selectedLocale: "en",
        selectedSyntax: "basic",
        visibleTabs: [
            "minutes",
            "hourly",
            "daily",
            "weekly",
            "monthly",
            "advanced"
        ],
        syntaxes: ["basic", "quartz"]
    })
});
const __VLS_ctx = {};
const __VLS_componentsOption = {
    VueCronEditorBuefy
};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.VApp;
/** @type {[typeof __VLS_components.VApp, typeof __VLS_components.vApp, typeof __VLS_components.VApp, typeof __VLS_components.vApp, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.VContainer;
/** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
const __VLS_9 = {}.VSelect;
/** @type {[typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    items: (__VLS_ctx.locales),
    label: "Language",
    value: (__VLS_ctx.selectedLocale),
    dense: true,
}));
const __VLS_11 = __VLS_10({
    items: (__VLS_ctx.locales),
    label: "Language",
    value: (__VLS_ctx.selectedLocale),
    dense: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
const __VLS_13 = {}.VSelect;
/** @type {[typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    label: "Cron syntax",
    value: (__VLS_ctx.selectedSyntax),
    items: (__VLS_ctx.syntaxes),
}));
const __VLS_15 = __VLS_14({
    label: "Cron syntax",
    value: (__VLS_ctx.selectedSyntax),
    items: (__VLS_ctx.syntaxes),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
const __VLS_17 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    fluid: true,
    dense: true,
}));
const __VLS_19 = __VLS_18({
    fluid: true,
    dense: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_20.slots.default;
const __VLS_21 = {}.VCheckbox;
/** @type {[typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    label: "minutes",
    value: "minutes",
    value: (__VLS_ctx.visibleTabs),
}));
const __VLS_23 = __VLS_22({
    label: "minutes",
    value: "minutes",
    value: (__VLS_ctx.visibleTabs),
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
const __VLS_25 = {}.VCheckbox;
/** @type {[typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    label: "hourly",
    value: "hourly",
    value: (__VLS_ctx.visibleTabs),
}));
const __VLS_27 = __VLS_26({
    label: "hourly",
    value: "hourly",
    value: (__VLS_ctx.visibleTabs),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
const __VLS_29 = {}.VCheckbox;
/** @type {[typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    label: "daily",
    value: "daily",
    value: (__VLS_ctx.visibleTabs),
}));
const __VLS_31 = __VLS_30({
    label: "daily",
    value: "daily",
    value: (__VLS_ctx.visibleTabs),
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
const __VLS_33 = {}.VCheckbox;
/** @type {[typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ]} */ ;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    label: "weekly",
    value: "weekly",
    value: (__VLS_ctx.visibleTabs),
}));
const __VLS_35 = __VLS_34({
    label: "weekly",
    value: "weekly",
    value: (__VLS_ctx.visibleTabs),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
const __VLS_37 = {}.VCheckbox;
/** @type {[typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ]} */ ;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    label: "monthly",
    value: "monthly",
    value: (__VLS_ctx.visibleTabs),
}));
const __VLS_39 = __VLS_38({
    label: "monthly",
    value: "monthly",
    value: (__VLS_ctx.visibleTabs),
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
const __VLS_41 = {}.VCheckbox;
/** @type {[typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ]} */ ;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
    label: "advanced",
    value: "advanced",
    value: (__VLS_ctx.visibleTabs),
}));
const __VLS_43 = __VLS_42({
    label: "advanced",
    value: "advanced",
    value: (__VLS_ctx.visibleTabs),
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
var __VLS_20;
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
const __VLS_45 = {}.VueCronEditorBuefy;
/** @type {[typeof __VLS_components.VueCronEditorBuefy, typeof __VLS_components.VueCronEditorBuefy, ]} */ ;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
    visibleTabs: (__VLS_ctx.visibleTabs),
    preserveStateOnSwitchToAdvanced: (true),
    locale: (__VLS_ctx.selectedLocale),
    cronSyntax: (__VLS_ctx.selectedSyntax),
    value: (__VLS_ctx.sample1CronExpression),
}));
const __VLS_47 = __VLS_46({
    visibleTabs: (__VLS_ctx.visibleTabs),
    preserveStateOnSwitchToAdvanced: (true),
    locale: (__VLS_ctx.selectedLocale),
    cronSyntax: (__VLS_ctx.selectedSyntax),
    value: (__VLS_ctx.sample1CronExpression),
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
(__VLS_ctx.sample1CronExpression);
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
const __VLS_49 = {}.VDataTable;
/** @type {[typeof __VLS_components.VDataTable, typeof __VLS_components.vDataTable, typeof __VLS_components.VDataTable, typeof __VLS_components.vDataTable, ]} */ ;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
    headers: (__VLS_ctx.headers),
    itemsPerPage: (5),
    items: (__VLS_ctx.expressions),
}));
const __VLS_51 = __VLS_50({
    headers: (__VLS_ctx.headers),
    itemsPerPage: (5),
    items: (__VLS_ctx.expressions),
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
__VLS_52.slots.default;
{
    const { top: __VLS_thisSlot } = __VLS_52.slots;
    const __VLS_53 = {}.VToolbar;
    /** @type {[typeof __VLS_components.VToolbar, typeof __VLS_components.vToolbar, typeof __VLS_components.VToolbar, typeof __VLS_components.vToolbar, ]} */ ;
    // @ts-ignore
    const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
        flat: true,
        color: "white",
    }));
    const __VLS_55 = __VLS_54({
        flat: true,
        color: "white",
    }, ...__VLS_functionalComponentArgsRest(__VLS_54));
    __VLS_56.slots.default;
    const __VLS_57 = {}.VToolbarTitle;
    /** @type {[typeof __VLS_components.VToolbarTitle, typeof __VLS_components.vToolbarTitle, typeof __VLS_components.VToolbarTitle, typeof __VLS_components.vToolbarTitle, ]} */ ;
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({}));
    const __VLS_59 = __VLS_58({}, ...__VLS_functionalComponentArgsRest(__VLS_58));
    __VLS_60.slots.default;
    var __VLS_60;
    const __VLS_61 = {}.VDivider;
    /** @type {[typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, ]} */ ;
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
        ...{ class: "mx-4" },
        inset: true,
        vertical: true,
    }));
    const __VLS_63 = __VLS_62({
        ...{ class: "mx-4" },
        inset: true,
        vertical: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    const __VLS_65 = {}.VSpacer;
    /** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
    // @ts-ignore
    const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({}));
    const __VLS_67 = __VLS_66({}, ...__VLS_functionalComponentArgsRest(__VLS_66));
    const __VLS_69 = {}.VDialog;
    /** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
    // @ts-ignore
    const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
        value: (__VLS_ctx.dialog),
        maxWidth: "900px",
    }));
    const __VLS_71 = __VLS_70({
        value: (__VLS_ctx.dialog),
        maxWidth: "900px",
    }, ...__VLS_functionalComponentArgsRest(__VLS_70));
    __VLS_72.slots.default;
    {
        const { activator: __VLS_thisSlot } = __VLS_72.slots;
        const [{ on }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_73 = {}.VBtn;
        /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
        // @ts-ignore
        const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({
            color: "primary",
            dark: true,
            ...{ class: "mb-2" },
        }));
        const __VLS_75 = __VLS_74({
            color: "primary",
            dark: true,
            ...{ class: "mb-2" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_74));
        (on);
        __VLS_76.slots.default;
        var __VLS_76;
    }
    const __VLS_77 = {}.VCard;
    /** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
    // @ts-ignore
    const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({}));
    const __VLS_79 = __VLS_78({}, ...__VLS_functionalComponentArgsRest(__VLS_78));
    __VLS_80.slots.default;
    const __VLS_81 = {}.VCardTitle;
    /** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
    // @ts-ignore
    const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({}));
    const __VLS_83 = __VLS_82({}, ...__VLS_functionalComponentArgsRest(__VLS_82));
    __VLS_84.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "headline" },
    });
    var __VLS_84;
    const __VLS_85 = {}.VCardText;
    /** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
    // @ts-ignore
    const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({}));
    const __VLS_87 = __VLS_86({}, ...__VLS_functionalComponentArgsRest(__VLS_86));
    __VLS_88.slots.default;
    const __VLS_89 = {}.VContainer;
    /** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
    // @ts-ignore
    const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({}));
    const __VLS_91 = __VLS_90({}, ...__VLS_functionalComponentArgsRest(__VLS_90));
    __VLS_92.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    const __VLS_93 = {}.VueCronEditorBuefy;
    /** @type {[typeof __VLS_components.VueCronEditorBuefy, typeof __VLS_components.VueCronEditorBuefy, ]} */ ;
    // @ts-ignore
    const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({
        value: (__VLS_ctx.editedItem.expression),
        visibleTabs: (__VLS_ctx.visibleTabs),
        preserveStateOnSwitchToAdvanced: (true),
        locale: (__VLS_ctx.selectedLocale),
        cronSyntax: (__VLS_ctx.selectedSyntax),
    }));
    const __VLS_95 = __VLS_94({
        value: (__VLS_ctx.editedItem.expression),
        visibleTabs: (__VLS_ctx.visibleTabs),
        preserveStateOnSwitchToAdvanced: (true),
        locale: (__VLS_ctx.selectedLocale),
        cronSyntax: (__VLS_ctx.selectedSyntax),
    }, ...__VLS_functionalComponentArgsRest(__VLS_94));
    (__VLS_ctx.editedItem.expression);
    var __VLS_92;
    var __VLS_88;
    const __VLS_97 = {}.VCardActions;
    /** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
    // @ts-ignore
    const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({}));
    const __VLS_99 = __VLS_98({}, ...__VLS_functionalComponentArgsRest(__VLS_98));
    __VLS_100.slots.default;
    const __VLS_101 = {}.VSpacer;
    /** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
    // @ts-ignore
    const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({}));
    const __VLS_103 = __VLS_102({}, ...__VLS_functionalComponentArgsRest(__VLS_102));
    const __VLS_105 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({
        ...{ 'onClick': {} },
        color: "blue darken-1",
        text: true,
    }));
    const __VLS_107 = __VLS_106({
        ...{ 'onClick': {} },
        color: "blue darken-1",
        text: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_106));
    let __VLS_109;
    let __VLS_110;
    let __VLS_111;
    const __VLS_112 = {
        onClick: (__VLS_ctx.close)
    };
    __VLS_108.slots.default;
    var __VLS_108;
    const __VLS_113 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    const __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({
        ...{ 'onClick': {} },
        color: "blue darken-1",
        text: true,
    }));
    const __VLS_115 = __VLS_114({
        ...{ 'onClick': {} },
        color: "blue darken-1",
        text: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_114));
    let __VLS_117;
    let __VLS_118;
    let __VLS_119;
    const __VLS_120 = {
        onClick: (__VLS_ctx.save)
    };
    __VLS_116.slots.default;
    var __VLS_116;
    var __VLS_100;
    var __VLS_80;
    var __VLS_72;
    var __VLS_56;
}
{
    const { 'item.actions': __VLS_thisSlot } = __VLS_52.slots;
    const [{ item }] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_121 = {}.VIcon;
    /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
    // @ts-ignore
    const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({
        ...{ 'onClick': {} },
        small: true,
        ...{ class: "mr-2" },
    }));
    const __VLS_123 = __VLS_122({
        ...{ 'onClick': {} },
        small: true,
        ...{ class: "mr-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_122));
    let __VLS_125;
    let __VLS_126;
    let __VLS_127;
    const __VLS_128 = {
        onClick: (...[$event]) => {
            __VLS_ctx.editItem(item);
        }
    };
    __VLS_124.slots.default;
    var __VLS_124;
    const __VLS_129 = {}.VIcon;
    /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
    // @ts-ignore
    const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({
        ...{ 'onClick': {} },
        small: true,
    }));
    const __VLS_131 = __VLS_130({
        ...{ 'onClick': {} },
        small: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_130));
    let __VLS_133;
    let __VLS_134;
    let __VLS_135;
    const __VLS_136 = {
        onClick: (...[$event]) => {
            __VLS_ctx.deleteItem(item);
        }
    };
    __VLS_132.slots.default;
    var __VLS_132;
}
var __VLS_52;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['mx-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['headline']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=App.vue.js.map