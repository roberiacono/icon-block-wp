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
import { Apple } from "lucide-react";

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

	const blockProps = useBlockProps();

	const colorProps = useColorProps(blockProps);

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
			</InspectorControls>
			<div {...blockProps}>
				<div>{SvgIcons[icon] || null}</div>
				<div>
					<Apple className="w-6 h-6" color={colorProps.style?.color} />
				</div>
			</div>
		</>
	);
}
