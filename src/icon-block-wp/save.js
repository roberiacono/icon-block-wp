import { useBlockProps } from "@wordpress/block-editor";
import { Icon } from "@wordpress/icons";

import { availableIcons } from "../icons";

import { getIcon } from "./includes/get-icon.js";

export default function save({ attributes }) {
	const {
		icon,
		size,
		iconColor,
		iconBackgroundColor,
		iconBackgroundColorGradient,
		iconAlign,
	} = attributes;

	const blockProps = useBlockProps.save({
		style: {
			textAlign: iconAlign,
		},
	});

	/* const IconComponent = LucideIcons[icon]; */
	const iconJSX = getIcon(icon);

	return (
		<div {...blockProps}>
			<div
				style={{
					backgroundColor: iconBackgroundColor || "transparent",
					background: iconBackgroundColorGradient || "transparent",
					display: "inline-block",
				}}
			>
				<Icon
					icon={iconJSX}
					fill={iconColor || "var(--wp--preset--color--foreground)"}
					size={size}
				/>
			</div>
		</div>
	);
}
