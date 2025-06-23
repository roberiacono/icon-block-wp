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
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import * as LucideIcons from "lucide-react";
import IconPicker from "./includes/IconPicker";

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

			<InspectorControls>
				<PanelBody title={__("Icon Picker", "icon-block-wp")}>
					<IconPicker
						selected={icon}
						onSelect={(name) => setAttributes({ icon: name })}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="styles">
				<PanelBody title={__("Size", "icon-block-wp")}>
					<RangeControl
						label={__("Icon Size", "icon-block-wp")}
						value={size}
						onChange={(value) => setAttributes({ size: value })}
						min={8}
						max={256}
					/>
				</PanelBody>
				<PanelColorGradientSettings
					title={__("Icon Colors", "icon-block-wp")}
					initialOpen={true}
					settings={[
						{
							colorValue: iconColor,
							onColorChange: (color) => setAttributes({ iconColor: color }),
							label: __("Icon Color", "icon-block-wp"),
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
							label: __("Background Color", "icon-block-wp"),
						},
					]}
				/>
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
					{IconComponent && <IconComponent size={size} />}
				</div>
			</div>
		</>
	);
}
