import { __ } from "@wordpress/i18n";
import { ALLOWED_ICONS } from "./icons";
import { useState, useRef, useEffect } from "react";

const iconNames = Object.keys(ALLOWED_ICONS);

function LazyIcon({ name, selected, onSelect }) {
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

	//const Icon = LucideIcons[name];
	const Icon = ALLOWED_ICONS[name];

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
			{isVisible && Icon ? <Icon size={20} /> : null}
		</button>
	);
}

export default function IconPicker({ selected, onSelect }) {
	const [search, setSearch] = useState("");

	const filtered = iconNames.filter((name) =>
		name.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<div>
			<input
				type="text"
				placeholder={__("Search icons...", "riaco-icon-block")}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				style={{ width: "100%", padding: "6px", marginBottom: "8px" }}
			/>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(40px, 1fr))",
					gap: "8px",
					maxHeight: "300px",
					overflowY: "auto",
				}}
			>
				{filtered.map((name) => (
					<LazyIcon
						key={name}
						name={name}
						selected={selected}
						onSelect={onSelect}
					/>
				))}
			</div>
		</div>
	);
}
