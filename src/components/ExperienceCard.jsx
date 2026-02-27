export default function ExperienceCard({
	title,
	description,
	fromDate,
	toDate,
}) {
	return (
		<div className="w-full p-0 md:p-4">
			<div className="flex flex-col gap-3 rounded-2xl rounded-tl-none rounded-br-none overflow-hidden bg-surface-light dark:bg-surface-dark border border-text-light/10 dark:border-text-dark/10 h-64 md:h-40 px-5 py-3">
				<div className="flex items-center justify-between gap-4">
					<h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
						{title}
					</h3>
					<span className="text-sm text-text-light/60 dark:text-text-dark/60">
						{fromDate} - {toDate}
					</span>
				</div>

				<p className="text-base text-text-light/70 dark:text-text-dark/70 md:line-clamp-3">
					{description}
				</p>
			</div>
		</div>
	);
}
