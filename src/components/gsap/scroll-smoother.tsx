"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import GSAPScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import type { PropsWithChildren } from "react";

gsap.registerPlugin(
	ScrollTrigger,
	GSAPScrollSmoother,
	DrawSVGPlugin,
	MotionPathPlugin,
	SplitText,
);

export function ScrollSmoother({ children }: PropsWithChildren) {
	useGSAP(() => {
		if (!GSAPScrollSmoother.get()) {
			GSAPScrollSmoother.create({
				content: "#smooth-content",
				wrapper: "#smooth-wrapper",
				smooth: 1.15,
				speed: 0.95,
				effects: true,
			});
		}
	});

	/** Render */
	return children;
}
