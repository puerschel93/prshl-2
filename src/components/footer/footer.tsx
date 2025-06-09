export function Footer() {
	return (
		<footer className="flex flex-row justify-center py-4 w-screen">
			<p className="text-neutral-500">
				&copy; {new Date().getFullYear()} Florian Pürschel. All rights reserved.
			</p>
		</footer>
	);
}
