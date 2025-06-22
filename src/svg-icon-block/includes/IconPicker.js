// IconPicker.js
import * as LucideIcons from "lucide-react";
import { useState } from "react";
import * as icons from "lucide-static";

const iconNames = Object.keys(icons);

export default function IconPicker({ selected, onSelect }) {
	const [search, setSearch] = useState("");

	const filtered = iconNames.filter((name) =>
		name.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<div>
			<input
				type="text"
				placeholder="Search icons..."
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
				{filtered.map((name) => {
					//console.log("name", name, typeof name);
					const Icon = LucideIcons[name];
					return (
						<button
							key={name}
							onClick={() => onSelect(name)}
							style={{
								border: selected === name ? "2px solid blue" : "1px solid #ccc",
								borderRadius: "4px",
								padding: "4px",
								background: "white",
							}}
							title={name}
						>
							{Icon && <Icon className="w-5 h-5" />}
						</button>
					);
				})}
			</div>
		</div>
	);
}
