#!/usr/bin/env node

import sade from "sade";
import kleur from "kleur";
import inquirer from "inquirer";
import {readJSONSync} from "fs-extra/esm";
import {getLibPath} from "../src/dir.mjs";
import {getSupportedAppTypes, initializeAppType} from "../src/init.mjs";

console.log(``);
console.log(kleur.cyan(`  ╭─────────────────╮`));
console.log(kleur.cyan(`  │                 │`));
console.log(kleur.cyan(`  │    🕵️‍♀️  ${kleur.cyan("Janus")}    │`));
console.log(kleur.cyan(`  │                 │`));
console.log(kleur.cyan(`  ╰─────────────────╯`));
console.log(``);

const program = sade("janus");
const version = readJSONSync(getLibPath("package.json")).version;

program
	.version(version);

program
	.command("init [key]")
	.describe("Initializes the config")
	.action(async (appType, opts) =>
	{
		taskHeadline("Init");

		if (!appType)
		{
			const promptResult = await inquirer.prompt({
				type: "list",
				name: "appType",
				message: "Tool to initialize:",
				choices: getSupportedAppTypes(),
			}, {});

			appType = promptResult.appType;
		}

		console.log("");
		console.log(`// Initializing app type: ${kleur.blue(appType)}`);
		console.log("");

		const result = await initializeAppType(appType);

		console.log(`Updated ${result.length} files:`);
		let hasAnyChange = false;

		result.forEach(entry =>
		{
			const log = ["•", kleur.magenta(entry.file)];

			if (entry.changed)
			{
				log.push(`(${kleur.red("updated")})`);
				hasAnyChange = true;
			}
			else
			{
				log.push(`(${kleur.gray("unchanged")})`);
			}

			console.log(log.join(" "));
		});

		console.log("");

		if (hasAnyChange)
		{
			console.log(kleur.bgYellow("                                                         "));
			console.log(kleur.bgYellow("  ⚠️ some files were changed, please verify the changes   "));
			console.log(kleur.bgYellow("                                                         "));
		}
		else
		{
			console.log(kleur.bgGreen("             "));
			console.log(kleur.bgGreen("  All done.  "));
			console.log(kleur.bgGreen("             "));
		}
	});


program.parse(process.argv);

/**
 * Logs a task headline
 */
export function taskHeadline (headline)
{
	headline = ` ${headline.toUpperCase()} `;
	console.log(`    ${kleur.bgCyan().black(headline)}`);
	console.log("");
}
