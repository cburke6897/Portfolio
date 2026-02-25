export default function IconButton({
	href,
	label,
	icon: Icon,
	iconSrc,
	className = "",
	target,
	rel,
	...props
}) {
	const resolvedRel = target === "_blank" ? rel || "noreferrer" : rel;

	return (
		<a
			href={href}
			aria-label={label}
			title={label}
			target={target}
			rel={resolvedRel}
			className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${className}`}
			{...props}
		>
			{Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
			{!Icon && iconSrc ? (
				<img 
					src={iconSrc} 
					alt="" 
					className="h-5 w-5 dark:invert" 
					aria-hidden="true" 
				/>
			) : null}
		</a>
	);
}