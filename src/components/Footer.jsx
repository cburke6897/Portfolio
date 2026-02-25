export default function Footer() {
	return (
		<footer className="mt-8 py-3 px-4 border-t border-text-light/10 dark:border-text-dark/10">
			<div className="text-center text-sm text-text-light/60 dark:text-text-dark/60">
				<p>&copy; {new Date().getFullYear()} Christopher Burke. All rights reserved.</p>
			</div>
		</footer>
	);
}
