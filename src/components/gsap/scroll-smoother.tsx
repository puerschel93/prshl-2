"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import MotionPathPlugin from "gsap/MotionPathPlugin";
import GSAPScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { PropsWithChildren } from "react";

gsap.registerPlugin(ScrollTrigger, GSAPScrollSmoother, DrawSVGPlugin, MotionPathPlugin);

export function ScrollSmoother({
  children
}: PropsWithChildren) {
  useGSAP(() => {
    if (!GSAPScrollSmoother.get()) {
      GSAPScrollSmoother.create({
        content: "#smooth-content",
        wrapper: "#smooth-wrapper",
        smooth: 1.5,
        speed: 0.25,
        effects: true,
      });
    }
  });

  /** Render */
  return (
    <React.Fragment>
      <p className="top-0 left-0 z-30 fixed" onClick={() => {
        GSAPScrollSmoother.get()?.scrollTo("#race-container-1", false, "bottom center");
      }}>TEST</p>
      {children}
    </React.Fragment>
  );
}