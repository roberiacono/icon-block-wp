/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	__experimentalUseColorProps as useColorProps,
	ColorPalette,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl, SelectControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import { SvgIcons } from "./icons";
import * as LucideIcons from "lucide-react";
import IconPicker from "./includes/IconPicker";
import { useEffect, useRef, useState } from "@wordpress/element";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		icon,
		size,
		iconColor,
		iconBackgroundColor,
		iconBackgroundColorGradient,
		iconAlign,
	} = attributes;

	const blockProps = useBlockProps({
		style: {
			textAlign: iconAlign,
		},
	});

	const colorProps = useColorProps(blockProps);
	console.log("colorProps", colorProps);
	console.log("attributes", attributes);

	const IconComponent = LucideIcons[icon]; //LucideIcons[icon];

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={iconAlign}
					onChange={(newAlign) => setAttributes({ iconAlign: newAlign })}
					label="Icon Alignment"
				/>
			</BlockControls>
			;
			<InspectorControls>
				<PanelBody title={__("Icon Picker")}>
					<IconPicker
						selected={icon}
						onSelect={(name) => setAttributes({ icon: name })}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="styles">
				<PanelColorGradientSettings
					title="Icon Colors"
					initialOpen={true}
					settings={[
						{
							colorValue: iconColor,
							onColorChange: (color) => setAttributes({ iconColor: color }),
							label: __("Icon Color"),
						},
						{
							colorValue: iconBackgroundColor,
							gradientValue: iconBackgroundColorGradient,
							onColorChange: (value) => {
								setAttributes({ iconBackgroundColor: value });
							},
							onGradientChange: (value) => {
								setAttributes({ iconBackgroundColorGradient: value });
							},
							label: __("Background Color"),
						},
					]}
				/>
				<PanelBody title={__("Size")}>
					<RangeControl
						label="Icon Size"
						value={size}
						onChange={(value) => setAttributes({ size: value })}
						min={8}
						max={128}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div
					style={{
						color: iconColor || "inherit",
						backgroundColor: iconBackgroundColor || "transparent",
						background: iconBackgroundColorGradient || "transparent",
						display: "inline-block",
					}}
				>
					{IconComponent && (
						<IconComponent className="w-10 h-10 text-blue-600" size={size} />
					)}
				</div>
			</div>
		</>
	);
}
