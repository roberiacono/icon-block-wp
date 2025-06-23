import { useBlockProps } from "@wordpress/block-editor";
import * as LucideIcons from "lucide-react";

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

	const IconComponent = LucideIcons[icon];

	return (
		<div {...blockProps}>
			<div
				style={{
					color: iconColor || "inherit",
					backgroundColor: iconBackgroundColor || "transparent",
					background: iconBackgroundColorGradient || "transparent",
					display: "inline-block",
				}}
			>
				{IconComponent && <IconComponent size={size} />}
			</div>
		</div>
	);
}
