import {globSync} from "glob";
import {getLibPath} from "./dir.mjs";
import {basename, join} from "node:path";
import {copySync} from "fs-extra/esm";
import {readFileSync, existsSync, promises} from "node:fs";
import {Buffer} from "node:buffer";


export function getSupportedAppTypes ()
{
	const files = globSync(getLibPath("_init") + "/*/");

	return files.map(
		dir => basename(dir)
	);
}


/**
 * @param {string} appType
 * @return {Promise<Array<{file: string, changed: boolean}>>}
 */
export async function initializeAppType (appType)
{
	if (!getSupportedAppTypes().includes(appType))
	{
		throw new Error(`Unknown tool: ${appType}`);
	}

	const sourceDir = getLibPath(`_init/${appType}`);
	const targetDir = process.cwd();

	const filesToCopy = globSync("*", {
		cwd: sourceDir,
		dot: true,
		nodir: true,
	});

	return Promise.all(filesToCopy.map(async fileName =>
	{
		const sourceFilePath = join(sourceDir, fileName);
		const targetFilePath = join(targetDir, fileName);
		let hasChanged = true;

		if (existsSync(targetFilePath))
		{
			const targetStat = await promises.stat(targetFilePath);

			if (targetStat.isDirectory())
			{
				throw new Error(`Could not overwrite ${fileName}, as it is a directory`);
			}

			hasChanged = 0 !== Buffer.compare(readFileSync(sourceFilePath), readFileSync(targetFilePath));
		}

		if (!hasChanged)
		{
			return {
				file: fileName,
				changed: false,
			};
		}

		copySync(sourceFilePath, targetFilePath);

		return {
			file: fileName,
			changed: true,
		};
	}));
}
