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
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";

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
import * as icons from "lucide-static";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { icon } = attributes;

	console.log("icon", icon);

	const blockProps = useBlockProps();

	const colorProps = useColorProps(blockProps);

	//console.log("LucideIcons", LucideIcons);
	const iconsArray = Object.keys(icons);
	console.log("iconsArray", iconsArray);
	const IconComponent = LucideIcons[icon]; //LucideIcons[icon];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Icon Settings")}>
					<SelectControl
						label={__("Select an Icon")}
						value={icon}
						options={[
							{ label: "Star", value: "star" },
							{ label: "Heart", value: "heart" },
						]}
						onChange={(value) => setAttributes({ icon: value })}
					/>
				</PanelBody>
				<PanelBody title={__("Icon Picker")}>
					<IconPicker
						selected={icon}
						onSelect={(name) => setAttributes({ icon: name })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				{/* <div>{SvgIcons[icon] || null}</div> */}
				{/* <div>
					<Apple className="w-6 h-6" color={colorProps.style?.color} />
				</div> */}
				<div className="mt-4">
					{IconComponent && (
						<IconComponent className="w-10 h-10 text-blue-600" />
					)}
				</div>
			</div>
		</>
	);
}
