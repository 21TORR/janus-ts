import {defineConfig} from "eslint/config";
import eslint21TORR from "../../eslint/base.mjs";

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
	{
		settings: {
			react: {
				version: "19",
			},
		},
	},
]);
