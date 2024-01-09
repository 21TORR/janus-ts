import {join} from "path";

/**
 * Returns the library root dir
 */
export function getLibPath (path)
{
	return join(new URL(import.meta.url).pathname, "../..", path);
}
