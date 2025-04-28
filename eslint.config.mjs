import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    ignores: [
      ".node_modules/*",
      "dist/*"
    ] 
  },
  { 
    files: ["**/*.{js,mjs,cjs,ts}"], 
    plugins: { js }, 
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error",
    },
  },
  { 
    files: ["**/*.{js,mjs,cjs,ts}"], 
    languageOptions: { 
      globals: {
        ...globals.browser, // Spread existing browser globals
        process: "readonly", // Add Node.js 'process' global
      },
    },
  },
  tseslint.configs.recommended,
]);