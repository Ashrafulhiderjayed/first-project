import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  { 
    ignores: [
      "node_modules/*",  // Fixed: Removed leading dot (correct is "node_modules")
      "dist/*"
    ] 
  },
  { 
    files: ["**/*.{js,mjs,cjs,ts}"], 
    plugins: { 
      js,
      prettier: prettierPlugin  // Add Prettier plugin
    }, 
    extends: [
      "js/recommended",
      "plugin:prettier/recommended"  // Prettier recommended config
    ],
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error",
      "prettier/prettier": "error"  // Enable Prettier rule
    },
  },
  { 
    files: ["**/*.{js,mjs,cjs,ts}"], 
    languageOptions: { 
      globals: {
        ...globals.browser,
        process: "readonly",
      },
    },
  },
  tseslint.configs.recommended,
  prettierConfig,  // Disables conflicting ESLint rules
]);