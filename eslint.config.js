import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import vueParser from "vue-eslint-parser";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default [
    js.configs.recommended,
    ...vue.configs["flat/essential"],
    prettierConfig,
    {
        files: ["**/*.{js,ts,vue}"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: "module",
                parser: typescriptParser,
                extraFileExtensions: [".vue"],
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            "@typescript-eslint": typescript,
            prettier: prettier,
        },
        rules: {
            "no-console":
                process.env.NODE_ENV === "production" ? "error" : "off",
            "no-debugger":
                process.env.NODE_ENV === "production" ? "error" : "off",
            "vue/no-unused-components": "warn",
            "vue/valid-v-slot": ["error", { allowModifiers: true }],
            "prettier/prettier": "error",
        },
    },
    {
        files: [
            "**/__tests__/*.{j,t}s?(x)",
            "**/tests/unit/**/*.spec.{j,t}s?(x)",
        ],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                describe: "readonly",
                it: "readonly",
                expect: "readonly",
                test: "readonly",
                beforeEach: "readonly",
                afterEach: "readonly",
                vi: "readonly",
            },
        },
    },
    {
        ignores: ["src/shims-tsx.d.ts"],
    },
];
