"use client";

import { Race } from "@/components/race";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const NUMBER_OF_ITEMS = 8;

export function Races() {
	const containerRef = useRef<HTMLDivElement>(null);
	const containerAnimationRef = useRef<gsap.core.Animation | null>(null);

	useGSAP(() => {
		containerAnimationRef.current = gsap.to(".races", {
			scrollTrigger: {
				id: "races-horizontal-scroll",
				trigger: containerRef.current,
				start: "top top",
				scrub: 1,
				pin: true,
				invalidateOnRefresh: true,
				snap: {
					snapTo: 1 / (NUMBER_OF_ITEMS - 1),
					duration: 0.1,
					delay: 0,
					ease: "power1.inOut",
				},
			},
			xPercent: -105 * (NUMBER_OF_ITEMS - 1),
			ease: "none",
		});
	}, []);

	/** Render */
	return (
		<div
			className="flex justify-center items-center w-screen h-screen"
			ref={containerRef}
		>
			<div className="flex flex-row overflow-x-visible content-width races">
				{Array.from({ length: 8 }).map((_, i) => (
					<Race key={`index-${i}`} index={i} />
				))}
			</div>
		</div>
	);
}
