import { useBlockProps } from "@wordpress/block-editor";

import * as LucideIcons from "lucide-react";

// Deprecated save versions
export const deprecated = [
	{
		attributes: {
			icon,
			size,
			iconColor,
			iconBackgroundColor,
			iconBackgroundColorGradient,
			iconAlign,
		},
		save: ({ attributes }) => {
			const { icon, size, iconColor, iconBackgroundColor, iconAlign } =
				attributes;

			const blockProps = useBlockProps.save({
				style: { textAlign: iconAlign },
			});
			const IconComponent = LucideIcons[icon];

			return (
				<div {...blockProps}>
					{" "}
					<div
						style={{
							color: iconColor || "inherit",
							backgroundColor: iconBackgroundColor || "transparent",
							background: iconBackgroundColorGradient || "transparent",
							display: "inline-block",
						}}
					>
						{" "}
						{IconComponent && <IconComponent size={size} />}{" "}
					</div>{" "}
				</div>
			);
		},
	},
];
