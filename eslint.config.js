import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        document: true,
        window: true,
      },
    },
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // React не нужен в JSX с версии 17
      "react/prop-types": "off", // Отключает проверку PropTypes
      "no-unused-vars": [
        "error",
        { varsIgnorePattern: "^(React|App)$" }, // Игнорируем React и App
      ],
    },
  },
  prettier,
];
