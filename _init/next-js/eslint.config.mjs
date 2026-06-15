import eslint21TORR from "../../eslint/next-js.mjs";

export default [
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
];
