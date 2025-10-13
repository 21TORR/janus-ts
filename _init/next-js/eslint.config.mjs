import eslint21TORR from "@21torr/janus/eslint/next-js.mjs";

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
