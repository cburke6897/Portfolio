import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function ProjectCard({
	image = "src/assets/null-image.png",
	link,
	title,
	description,
}) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className="group block w-full p-0 md:p-4"
		>
			<div className="relative flex items-center gap-4 rounded-2xl rounded-tl-none rounded-br-none overflow-hidden bg-surface-light dark:bg-surface-dark hover:bg-primary/10 dark:hover:bg-primary-dark/10 border border-text-light/10 dark:border-text-dark/10 transition-colors h-64 md:h-40 px-5 py-2 md:py-3">
				<ArrowUpRightIcon className="absolute top-3 right-3 w-5 h-5 text-text-light dark:text-text-dark group-hover:text-primary dark:group-hover:text-primary-dark transition-colors" />
				
				<div className="w-32 h-32 shrink-0 overflow-hidden rounded-2xl rounded-tl-none rounded-br-none">
					<img
						src={image}
						alt={title}
						className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				</div>

				<div className="flex-1 p-4 flex flex-col justify-center">
					<h3 className="type-title font-semibold text-text-light dark:text-text-dark mb-2 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
						{title}
					</h3>
					<p className="type-text text-text-light/70 dark:text-text-dark/70 md:line-clamp-3 group-hover:text-text-light dark:group-hover:text-text-dark transition-colors">
						{description}
					</p>
				</div>
			</div>
		</a>
	);
}
