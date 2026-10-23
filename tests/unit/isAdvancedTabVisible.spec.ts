import { shallowMount } from "@vue/test-utils";
import VueCronEditorBuefy from "../../src/buefy/VueCronEditorBuefy.vue";

function getMountedComponent(Component: any, props: any) {
    return shallowMount(Component, {
        props,
    });
}

describe("isAdvancedVisible prop", () => {
    it("renders advanced tab when advanced is true", () => {
        const component = getMountedComponent(VueCronEditorBuefy, {
            visibleTabs: ["monthly", "advanced"],
        });
        expect(component.find(".advanced-tab").exists()).toBe(true);
    });

    it("does not render advanced tab when isAdvancedVisible is false", () => {
        const component = getMountedComponent(VueCronEditorBuefy, {
            visibleTabs: ["monthly"],
        });
        expect(component.find(".advanced-tab").exists()).toBe(false);
    });
});
