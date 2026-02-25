import IconButton from "./IconButton";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import selfImage from "../assets/self.jpg";

export default function ImageCard({
	githubUrl = "https://github.com/cburke6897",
	linkedinUrl = "https://www.linkedin.com/in/christopher-burke05/",
}) {
	return (
		<div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-2xl rounded-tl-none rounded-br-none bg-surface-light/90 px-6 py-8 shadow-lg border border-text-light/10 dark:bg-surface-dark/90 dark:border-text-dark/10">
			<div className="w-full">
				<img
					src={selfImage}
					alt="Portrait"
					className="mx-auto h-52 w-36 rounded-2xl rounded-tl-none rounded-br-none object-cover border border-text-light/10 dark:border-text-dark/10"
				/>
			</div>

			<div className="flex items-center gap-3">
				<IconButton
					href={githubUrl}
					label="GitHub"
					iconSrc={githubIcon}
					target="_blank"
					className="text-text-light dark:text-text-dark bg-bg-light dark:bg-bg-dark hover:bg-black/5 dark:hover:bg-white/10"
				/>
				<IconButton
					href={linkedinUrl}
					label="LinkedIn"
					iconSrc={linkedinIcon}
					target="_blank"
					className="text-text-light dark:text-text-dark bg-bg-light dark:bg-bg-dark hover:bg-black/5 dark:hover:bg-white/10"
				/>
			</div>
		</div>
	);
}
