"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { PropsWithChildren } from "react";

/** Props Interface */
interface PinProps extends PropsWithChildren {
	pinDuration: number;
}

export function Pin({ children, pinDuration }: PinProps) {
	/** GSAP */
	useGSAP(() => {
		gsap.to(".pin", {
			scrollTrigger: {
				trigger: ".pin",
				start: "top top",
				end: `+=${pinDuration}px`,
				pin: true,
				scrub: 1,
				markers: true,
			},
		});
	});

	/** Render */
	return <div className="pin">{children}</div>;
}
