import {defineConfig, globalIgnores} from "eslint/config";
import eslint21TORR from "@21torr/janus/eslint/next-js.mjs";

export default defineConfig([
	...eslint21TORR,
	{
		name: "App Settings",
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	globalIgnores([
		// Default ignores of eslint-config-next:
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
	]),
	{
		settings: {
			react: {
				version: "19",
			},
		},
		rules: {
			// this rule crashes right now, so disabling it
			"react/jsx-filename-extension": "off",
		},
	},
]);
