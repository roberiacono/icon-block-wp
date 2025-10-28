import { __ } from "@wordpress/i18n";

import { useState, useRef, useEffect } from "react";

import { Icon } from "@wordpress/icons";

import { ALLOWED_ICONS } from "../../icons";

export default function LazyIcon({ name, selected, onSelect }) {
	const ref = useRef();
	const [isVisible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 },
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, []);

	/* const Icon = ALLOWED_ICONS[name]; */
	const icon = ALLOWED_ICONS[name];

	return (
		<button
			ref={ref}
			onClick={() => onSelect(name)}
			style={{
				border: selected === name ? "2px solid blue" : "1px solid #ccc",
				borderRadius: "4px",
				padding: "4px",
				background: "white",
				width: "100%",
				height: "40px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
			title={name}
		>
			{isVisible && <Icon icon={icon} />}
		</button>
	);
}
