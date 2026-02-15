import { shallowMount } from "@vue/test-utils";
import VueCronEditorBuefy from "../../src/buefy/VueCronEditorBuefy.vue";
import { nextTick } from "vue-demi";

function getMountedComponent(Component: any, props: any) {
    return shallowMount(Component, {
        props,
    });
}

describe("changing expression updates data", () => {
    it("when changing to expression from different tab, data is updated", async () => {
        const component = getMountedComponent(VueCronEditorBuefy, {
            modelValue: "*/43 * * * *",
        });
        component.setProps({ modelValue: "0 0 * * MON,WED,THU" });

        await nextTick();

        expect(component.vm.currentTab).toBe("weekly");
        expect(component.vm.editorData).toStrictEqual({
            days: ["MON", "WED", "THU"],
            hours: 0,
            minutes: 0,
            type: "weekly",
        });
    });
});
