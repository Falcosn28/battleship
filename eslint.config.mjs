import js from "@eslint/js";
import globals from "globals";
import css from "@eslint/css";
import jest from "eslint-plugin-jest";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  { files: ["**/*.test.js"],plugins: { jest },extends: ["jest/recommended"],languageOptions: {globals: globals.jest,},},
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
]);
