2.1.3
=====

* (improvement) Allow `context`, `ctx`, `options` and `opts` as unused variable name.


2.1.2
=====

* (improvement) Bump dprint dependencies. 


2.1.1
=====

* (improvement) Bump dependencies.


2.1.0
=====

* (improvement) Bump dependencies in both initial `package.json`.
* (bug) Add missing `prettier-package-json` in both initial `package.json`.
* (improvement) Update in both initial `package.json` the minimum node version to 22.
* (improvement) Add new dev folder of next and `.mts` in initial `tsconfig.json`.
* (feature) Update `@next/eslint-plugin-next` to v16.
* (feature) Update `eslint-plugin-storybook` to v10.
* (improvement) Bump dependencies.
* (improvement) Bump dprint plugin versions.


2.0.3
=====

* (improvement) Also allow `thead` and `tbody` as type selector in Stylelint.


2.0.2
=====

* (improvement) Bump dprint plugin versions.
* (improvement) Bump dependencies.


2.0.1
=====

* (improvement) Loosen a restriction on `explicit-module-boundary-types` in ESLint.


2.0.0
======

* (bc) Update `@next/eslint-plugin-next` to v15.
* (improvement) Update eslint in `_init/next-js/package.json` to v9.


1.0.13
======

* (improvement) Bump dependencies.


1.0.12
======

* (improvement) Use flat config structure for ESLint Storybook config.


1.0.11
======

* (improvement) Bump dependencies.


1.0.10
=====

* (improvement) Deactivate stylelint rule `no-descending-specificity`.


1.0.9
=====

* (improvement) Provide a `.nvmrc` and the correct Node.js version in the `engines` field of the `package.json` file. This is currently set to Node v20.


1.0.8
=====

* (bug) Disable TypeScript option `"noUncheckedIndexedAccess"` again due to compability issues with SCSS Modules.


1.0.7
=====

* (improvement) Update the _init `tsconfig.json` files, which now extend new basic `tsconfig.json` files.


1.0.6
=====

* (improvement) Disable eslint rule `@typescript-eslint/no-namespace` only for files in `src/@types`.
* (improvement) Add to `lint:eslint` and `fix-lint:eslint` in both init `package.json` the `--no-error-on-unmatched-pattern` flag.


1.0.5
=====

* (improvement) Update ESLint integration for next.js projects.
* (bug) Fix wrong module in `tsconfig.json` for next-js.


1.0.4
=====

* (bug) Fix release workflow once more.


1.0.3
=====

* (bug) Fix release workflow once more.


1.0.2
=====

* (bug) Fix release workflow.


1.0.1
=====

* (improvement) Bump dprint plugins.


1.0.0
=====

Initial Release `\o/`
