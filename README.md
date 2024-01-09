Janus TS
========

This repository contains all config files and tools for code style tools, formatters and linters for TS / JS / SCSS / CSS.


## Installation

```bash
pnpm add -D @21torr/janus
```

## Integration

You can automatically initialize all config files in your app, by just running:

```bash
pnpm janus init [app-type]
```

This will copy all config files to your project and add required packages.
If any of the files changed, you should run the lint fixers + `pnpm i` afterwards.

You can currently initialize the following app types:

- `next-js`


## Contributing

### dprint

The rules are sorted by rule name and then scope. The rules are named `rule` or `scope.rule`.

Example: 

```json
{
	"a": true,
	"test.b": true,
	"ztest.b": true
}
```
