import parse from "html-react-parser";
import { SVG, Path } from "@wordpress/primitives";
import { domToReact } from "html-react-parser";

export const parseIcon = (icon) => {
	return parse(icon.trim(), {
		replace: ({ name, attribs, children }) => {
			if (name === "svg") return <SVG {...attribs}>{domToReact(children)}</SVG>;
			if (name === "path") return <Path {...attribs} />;
		},
	});
};
