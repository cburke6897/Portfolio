import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
	HomeIcon,
	FolderIcon,
	BriefcaseIcon,
	WrenchIcon,
	PencilSquareIcon,
	SunIcon,
	MoonIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
    const navigate = useNavigate();

	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "dark"
	);

	const navItems = [
		{ label: "Home", Icon: HomeIcon, onClick: () => navigate("/") },
		{ label: "Projects", Icon: FolderIcon, onClick: () => navigate("/projects") },
		{ label: "Experience", Icon: BriefcaseIcon, onClick: () => navigate("/experience") },
		{ label: "Tools", Icon: WrenchIcon, onClick: () => navigate("/tools") },
		{ label: "Contact", Icon: PencilSquareIcon, onClick: () => navigate("/contact") },
	];

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	useEffect(() => {
		const root = document.documentElement;

		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}

		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<nav className="fixed top-6 left-1/2 z-40 -translate-x-1/2">
			<div className="flex items-center gap-2 rounded-full bg-surface-light/90 dark:bg-surface-dark/90 px-3 py-2 shadow-lg border border-text-light/10 dark:border-text-dark/10">
				{navItems.map(({ label, Icon, onClick }) => (
					<button
						key={label}
						type="button"
						aria-label={label}
						title={label}
                        onClick = {onClick}
						className="flex h-10 w-10 items-center justify-center rounded-full text-text-light dark:text-text-dark transition-colors hover:bg-black/5 dark:hover:bg-white/10"
					>
						<Icon className="h-5 w-5" />
					</button>
				))}
				<button
					type="button"
					aria-label="Toggle theme"
					title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
					onClick={toggleTheme}
					className="flex h-10 w-10 items-center justify-center rounded-full text-text-light dark:text-text-dark transition-colors hover:bg-black/5 dark:hover:bg-white/10"
				>
					{theme === "dark" ? (
						<SunIcon className="h-5 w-5" />
					) : (
						<MoonIcon className="h-5 w-5" />
					)}
				</button>
			</div>
		</nav>
	);
}
