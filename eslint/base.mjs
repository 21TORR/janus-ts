import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import globals from "globals";
import react from "eslint-plugin-react/configs/recommended.js";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import * as jsXA11y from "eslint-plugin-jsx-a11y";
import tseslint from 'typescript-eslint';

export default [
	js.configs.recommended,
	// jsdoc.configs["flat/recommended"],
	//  └> We don't use the recommended flags, as they include quite a lot of code formatting rules
	//jsXA11y.default.flatConfigs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.strict,
	//  └> the *TypeChecked rule sets have too many false positives
	react,
	{
		name: "21TORR Base",
		languageOptions: {
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
				...globals.es2020,
				...globals["shared-node-browser"],
			},
		},
		settings: {
			jsdoc: {
				mode: "typescript",
			},
			react: {
				"version": "detect",
			},
		},
		plugins: {
			jsdoc: jsdoc,
			"react-hooks": reactHooksPlugin,
		},
		rules: {
			// region ESLint: Possible Problems
			"no-await-in-loop": "error",
			"no-constructor-return": "error",
			"no-duplicate-imports": "warn",
			"no-self-compare": "error",
			"no-template-curly-in-string": "warn",
			// "no-use-before-define": "error",
			//  └> see below: @typescript-eslint/no-use-before-define
			// "no-useless-assignment": "warn",
			// └> enable with ESLint v9
			// endregion

			// region ESLint: Suggestions
			"block-scoped-var": "error",
			"default-case-last": "warn",
			// "default-param-last": "warn",
			//  └> see below: @typescript-eslint/default-param-last
			"eqeqeq": ["error", "always", {
				"null": "ignore",
			}],
			"max-depth": ["warn", 4],
			// "max-params": ["warn", 5],
			//  └> see below: @typescript-eslint/max-params
			"no-alert": "error",
			"no-bitwise": "warn",
			"no-caller": "warn",
			"no-console": "warn",
			"no-eval": "error",
			"no-extend-native": "error",
			// endregion

			// region ESLint: Layout & Formatting
			"unicode-bom": ["error", "never"],
			// endregion

			// region Plugin: JSDoc
			"jsdoc/check-access": "error",
			"jsdoc/check-param-names": ["error", {
				disableMissingParamChecks: true,
			}],
			"jsdoc/check-property-names": "error",
			"jsdoc/check-tag-names": "error",
			"jsdoc/check-types": "error",
			"jsdoc/check-values": "error",
			"jsdoc/empty-tags": "error",
			"jsdoc/implements-on-classes": "error",
			"jsdoc/no-defaults": "error",
			"jsdoc/no-types": "error",
			"jsdoc/require-param-description": "warn",
			"jsdoc/require-param-name": "error",
			"jsdoc/require-param-type": "off",
			//  └> we use TypeScript for types
			"jsdoc/require-property-description": "warn",
			"jsdoc/require-property-name": "error",
			"jsdoc/require-returns-check": "error",
			"jsdoc/require-returns-description": "error",
			"jsdoc/require-yields-check": "error",
			"jsdoc/valid-types": "error",
			// endregion

			// region Plugin: React
			"react/button-has-type": "error",
			"react/jsx-curly-brace-presence": "warn",
			"react/jsx-filename-extension": ["error", {
				extensions: [".jsx", ".tsx"],
			}],
			"react/jsx-no-constructed-context-values": "error",
			// "react/jsx-no-leaked-render": "off",
			//  └> false positives for inline conditionals
			"react/jsx-no-script-url": "error",
			"react/jsx-pascal-case": ["error"],
			"react/no-access-state-in-setstate": ["error"],
			"react/no-did-mount-set-state": ["error"],
			"react/no-did-update-set-state": ["error"],
			"react/no-this-in-sfc": "error",
			"react/no-will-update-set-state": "error",
			"react/prefer-es6-class": ["error", "always"],
			"react/prefer-read-only-props": "error",
			"react/prop-types": "off",
			"react/react-in-jsx-scope": "off",
			"react/style-prop-object": "warn",
			"react/void-dom-elements-no-children": "error",
			// endregion

			// region Plugin: React Hooks
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
			// endregion

			// region Plugin: TypeScript
			"@typescript-eslint/adjacent-overload-signatures": "error",
			"@typescript-eslint/ban-ts-comment": ["error", {
				"ts-ignore": "allow-with-description",
			}],
			"@typescript-eslint/consistent-type-assertions": ["error", {
				assertionStyle: 'as',
			}],
			"@typescript-eslint/default-param-last": "error",
			"@typescript-eslint/explicit-function-return-type": "off",
			//  └> covered by: @typescript-eslint/explicit-module-boundary-types
			"@typescript-eslint/explicit-member-accessibility": "error",
			// disable, as don't want it all the time
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/max-params": ["warn", {
				max: 6,
			}],
			"@typescript-eslint/no-array-delete": "error",
			"@typescript-eslint/no-confusing-non-null-assertion": "error",
			"@typescript-eslint/no-empty-object-type": "error",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-loop-func": "error",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-unused-vars": ["warn", {
				argsIgnorePattern: '^(context|ctx|options|opts|props)$',
			}],
			"@typescript-eslint/no-use-before-define": "off",
			//  └> false positives with named exports, even with `allowNamedExports: true`
			"@typescript-eslint/no-useless-empty-export": "error",
			"@typescript-eslint/prefer-find": "warn",
			"@typescript-eslint/prefer-reduce-type-parameter": "warn",
			"@typescript-eslint/prefer-string-starts-ends-with": "warn",
			"@typescript-eslint/require-array-sort-compare": "error",
			"@typescript-eslint/return-await": "off",
			// endregion

			// region Plugin: TypeScript disabled (they require parserServices)
			"@typescript-eslint/await-thenable": "off",
			"@typescript-eslint/no-base-to-string": "off",
			"@typescript-eslint/no-duplicate-type-constituents": "off",
			// endregion
		}
	},
	{
		name: "Allow namespace in @types",
		rules: {
			"@typescript-eslint/no-namespace": "off",
		},
		files: [
			"src/@types/*",
		],
	},
];
