// @ts-check

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "eslint.config.mjs",
    ],
  },
  {
    files: ["**/*.{js,ts}"],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
    ],

    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["jest.config.js"],
        },
      },
    },
    rules: {
      // "no-console": "error",
      // "dot-notation": "error",
      "@typescript-eslint/no-misused-promises": "off",
    },
  },
  {
    files: ["jest.config.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        module: "readonly",
        require: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "off",
    },
  },
]);
