export function Navigation() {
	return (
		<nav className="top-0 right-0 left-0 fixed flex flex-row justify-center backdrop-blur-2xl py-6 w-full">
			<div className="flex flex-row gap-8 content-width">
				<a href="/work">work</a>
				<a href="/runs">runs</a>
				<a href="/blog">blog</a>
			</div>
		</nav>
	);
}
