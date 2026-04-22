import { createElement, useEffect, useState } from "react";
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
		const [isSmallScreen, setIsSmallScreen] = useState(false);

		useEffect(() => {
			const checkScreen = () => setIsSmallScreen(window.innerWidth < 640);
			checkScreen();
			window.addEventListener("resize", checkScreen);
			return () => window.removeEventListener("resize", checkScreen);
		}, []);
	const [expanded, setExpanded] = useState(false);
	const [hoveredButton, setHoveredButton] = useState(null);
	const [navbarHovered, setNavbarHovered] = useState(false);
	const navigate = useNavigate();
	const handleNavbarMouseEnter = () => {
		setNavbarHovered(true);
		if (!isSmallScreen) setExpanded(true);
	};
	const handleNavbarMouseLeave = () => {
		setNavbarHovered(false);
		if (!isSmallScreen) setExpanded(false);
		setHoveredButton(null);
	};

	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light"
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
		<nav
			className="fixed top-4 left-1/2 z-40 -translate-x-1/2"
			onMouseEnter={handleNavbarMouseEnter}
			onMouseLeave={handleNavbarMouseLeave}
		>
			<div
				className={`flex items-start gap-1 rounded-3xl bg-surface-light/90 dark:bg-surface-dark/90 px-2.5 py-2 shadow-lg border border-text-light/10 dark:border-text-dark/10 navbar-transition ${isSmallScreen || expanded ? "navbar-expanded" : "navbar-collapsed"}`}
			>
				{navItems.map(({ label, Icon, onClick }) => (
					<button
						key={label}
						type="button"
						aria-label={label}
						onClick={onClick}
						className="group flex min-w-14 flex-col items-center gap-0.5 text-text-light dark:text-text-dark cursor-pointer"
						onMouseEnter={() => setHoveredButton(label)}
						onMouseLeave={() => setHoveredButton(null)}
					>
						<span className="flex h-9 w-9 items-center justify-center rounded-full transition-colors group-hover:bg-black/5 dark:group-hover:bg-white/10">
							{createElement(Icon, { className: "h-4.5 w-4.5" })}
						</span>
						<span
							className={`type-small leading-none transition-all duration-300 pb-0 m-0 ${
								isSmallScreen
									? "h-5 overflow-visible opacity-100 translate-y-0"
									: (expanded && hoveredButton === label && navbarHovered)
									? "h-5 overflow-visible opacity-100 translate-y-0"
									: "h-0 overflow-hidden opacity-0 -translate-y-1"
							}`}
						>
							{label}
						</span>
					</button>
				))}
				<button
					type="button"
					aria-label="Toggle theme"
					onClick={toggleTheme}
					className="group flex min-w-14 flex-col items-center gap-0.5 text-text-light dark:text-text-dark"
					onMouseEnter={() => setHoveredButton("Theme")}
					onMouseLeave={() => setHoveredButton(null)}
				>
					<span className="flex h-9 w-9 items-center justify-center rounded-full transition-colors group-hover:bg-black/5 dark:group-hover:bg-white/10">
						{theme === "dark" ? (
							<SunIcon className="h-4.5 w-4.5" />
						) : (
							<MoonIcon className="h-4.5 w-4.5" />
						)}
					</span>
					<span
						className={`type-small leading-none transition-all duration-300 pb-0 m-0 ${
							isSmallScreen
								? "h-5 overflow-visible opacity-100 translate-y-0"
								: (expanded && hoveredButton === "Theme" && navbarHovered)
								? "h-5 overflow-visible opacity-100 translate-y-0"
								: "h-0 overflow-hidden opacity-0 -translate-y-1"
						}`}
					>
						Theme
					</span>
				</button>
			</div>
		</nav>
	);
}
