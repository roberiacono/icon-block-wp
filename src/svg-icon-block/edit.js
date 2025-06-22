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

// List of predefined SVGs
const svgIcons = {
	star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431L24 9.748l-6 5.854 1.416 8.252L12 18.896l-7.416 4.958L6 15.602 0 9.748l8.332-1.73z"/></svg>`,
	heart: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5c0-3.22 2.61-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.39 3 22 5.28 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
};

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

	// Inject the selected color as fill into SVG
	/* const svgWithColor = svgIcons[icon]
		? svgIcons[icon].replace(
				"<svg",
				`<svg fill="${colorProps.style?.color || "currentColor"}"`,
		  )
		: ""; */

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
			<div
				{...blockProps}
				dangerouslySetInnerHTML={{ __html: svgIcons[icon] || "" }}
			/>
		</>
	);
}
