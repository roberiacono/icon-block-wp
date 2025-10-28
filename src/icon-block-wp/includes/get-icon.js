import { availableIcons } from "../../icons";
import { isString } from "lodash";
import { parseIcon } from "./parse-icon.js";

export function getIcon(name) {
	const icon = availableIcons[name];

	if (!icon) return null; // handle missing icons safely

	// If it’s a string, parse it into JSX
	return isString(icon) ? parseIcon(icon) : icon;
}
