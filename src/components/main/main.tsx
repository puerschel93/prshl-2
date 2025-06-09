"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

const timeline = gsap.timeline();

export function Main() {
	/** Register GSAP */

	/** GSAP */
	useGSAP(() => {
		const splitHeadline = SplitText.create("#headline", {
			type: "words",
			autoSplit: true,
		});
		const splitContent = SplitText.create("#main-content", {
			type: "words",
			autoSplit: true,
		});
		timeline.from(splitHeadline.words, {
			duration: 0.85,
			yPercent: 100,
			opacity: 0,
			stagger: 0.15,
			ease: "back.out(0.5)",
			delay: 0.5,
		});
		timeline.from(splitContent.words, {
			duration: 1,
			yPercent: 100,
			stagger: 0.02,
			opacity: 0,
			ease: "back.out(0.5)",
			delay: 0,
		});
		timeline.to("#main-container", {
			duration: 0.75,
			scale: 1,
			ease: "expo.inOut",
			delay: -2,
		});
		return () => {
			splitHeadline.revert();
			splitContent.revert();
		};
	});

	/** Render */
	return (
		<div
			className={clsx(
				"pt-[50vh] w-screen h-[50vh]",
				"flex flex-col items-center justify-center",
			)}
		>
			<div
				className="flex flex-col gap-2 content-width"
				id="main-container"
				style={{
					scale: 1.15,
				}}
			>
				<h1 id="headline" data-speed="1.2">
					Florian Pürschel
				</h1>
				<p id="main-content" data-speed="1.0">
					Hello, my name is Florian Pürschel{" "}
					<span className="text-primary">(/flɔˈriːan ˈpyːʁʃəl/)</span>. I am a
					software engineer from Berlin, Germany. I am passionate about web
					development, running and design. I love organizing complex stuff in
					the easiest possible way. Currently, I am working at Menke Gerüstbau
					GmbH to develop a system for a digital workforce management and
					training for my third marathon.
					<br />I love goofing around with new technologies and frameworks, so I
					decided to build this website with Next.js, TypeScript, Tailwind CSS
					and GSAP. I hope you enjoy your stay here!
				</p>
			</div>
		</div>
	);
}
