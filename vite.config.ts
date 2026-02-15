import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
    plugins: [createVuePlugin()],
    base: "/vue-cron-editor",
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "~": resolve(__dirname, "node_modules/"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern",
                additionalData: `
          @import "bulma/sass/utilities/functions";
          @import "bulma/sass/utilities/initial-variables";
          @import "bulma/sass/utilities/derived-variables";
          $primary: #3273dc;
          $primary-invert: findColorInvert($primary);
        `,
            },
        },
    },
    build: {
        outDir: "dist",
    },
    optimizeDeps: {
        include: ["vue", "vuetify"],
    },
});
