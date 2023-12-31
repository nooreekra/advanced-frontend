module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "plugin:i18next/recommended", "plugin:storybook/recommended", "plugin:storybook/recommended"],
  overrides: [{
    env: {
      node: true,
      jest: true
    },
    files: [".eslintrc.{js,cjs}"],
    parserOptions: {
      sourceType: "script"
    }
  }],
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "i18next", "@typescript-eslint", "react-hooks"],
  rules: {
    "react/jsx-indent": [2, 4],
    "react/jsx-indent-props": [2, 4],
    "react/jsx-filename-extension": [2, {
      extensions: [".js", ".jsx", ".tsx"]
    }],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/no-deprecated": "warn",
    "@typescript-eslint/naming-convention": "off",
    "i18next/no-literal-string": ["warn", {
      markupOnly: true
    }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-param-reassign": "off"
  },
  globals: {
    __IS_DEV__: true
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts, tsx}'],
    rules: {
      'i18next/no-literal-string': 'off'
    }
  }]
};