console.log();

/** @type {import("stylelint").Config} */
export default {
	extends: [
		import.meta.resolve("stylelint-config-standard"),
	],
	customSyntax: import.meta.resolve("postcss-scss"),
	plugins: [
		import.meta.resolve("stylelint-scss"),
	],
	ignoreFiles: [
		"storybook-static/**",
	],
	rules: {
		// @-rules
		// Disable the rule from CSS and enable it from SCSS
		"at-rule-no-unknown": null,
		"scss/at-rule-no-unknown": true,
		"at-rule-empty-line-before": ["always", {
			except: [
				"blockless-after-same-name-blockless",
				"blockless-after-blockless",
				"first-nested",
			],
			ignore: ["after-comment"],
			ignoreAtRules: ["else"],
		}],

		// Color
		"color-named": "never",

		// Declaration
		"declaration-no-important": true,

		// Descending
		"no-descending-specificity": null,

		// Font weight
		"font-weight-notation": "numeric",

		// Max & Min
		"max-nesting-depth": 4,

		// nesting
		"nesting-selector-no-missing-scoping-root": [
			true,
			{
				ignoreAtRules: ["mixin"],
			},
		],

		// Rule
		"rule-empty-line-before": ["always-multi-line", {
			"except": [
				"after-single-line-comment",
				"first-nested",
			],
			"ignore": [
				"after-comment",
			],
		}],

		// Selector
		"selector-max-id": 0,
		"selector-max-type": [0, {
			ignoreTypes: [
				"a",
				"body",
				"button",
				"dd",
				"dt",
				"em",
				"html",
				"i",
				"iframe",
				"img",
				"li",
				"mark",
				"path",
				"strong",
				"svg",
				"tbody",
				"td",
				"th",
				"thead",
				"tr",
			],
		}],
		"selector-pseudo-class-no-unknown": [true, {
			ignorePseudoClasses: ["global"],
		}],

		// Unit
		"unit-disallowed-list": ["pc", "in", "cm", "mm", "ex"],
		"unit-no-unknown": true,

		// Unknown
		"no-unknown-animations": true,

		// Value
		"value-keyword-case": ["lower", {
			camelCaseSvgKeywords: true,
		}],

		// Disabled Style Rules
		// We use dprint for formatting
		"color-function-notation": null,
		"comment-empty-line-before": null,
		"custom-property-empty-line-before": null,
		"declaration-empty-line-before": null,
		"font-family-name-quotes": null,
		"declaration-block-no-redundant-longhand-properties": null,
	},
};
