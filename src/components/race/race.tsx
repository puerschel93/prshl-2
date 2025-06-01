"use client";

import { useGSAP } from "@gsap/react";
import NumberFlow, { continuous } from '@number-flow/react';
import gsap from "gsap";
import Image from "next/image";
import React from "react";

/** Props Interface */
interface RaceProps {
  index: number;
  distance: number;
}

export function Race({ index, distance }: RaceProps) {
  useGSAP(() => {
    gsap.to(`#race-container-${index}`, {
      scrollTrigger: {
        id: `race-container-${index}-pin`,
        trigger: `#race-container-${index}`,
        start: "top top",
        end: `+=${distance / 5}px`,
        scrub: true,
        pin: true,
      }
    })
    gsap.fromTo(`#race-item-${index}`,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: `#race-container-${index}`,
          start: "top bottom",
          end: "top top",
          scrub: true
        }
      }
    );
  })

  /** Render */
  return (
    <div className="relative px-[2.5vw] py-[5vh] w-full h-screen" id={`race-container-${index}`}>
      <div className="bg-neutral-950 opacity-0 rounded-xl w-full h-full"
        id={`race-item-${index}`}>
        <Image src="/images/races/bitmap.webp" alt="race" fill />
        <SVGG containerId={`race-container-${index}`} distance={distance} />
      </div>
    </div>
  )
}

function SVGG({ containerId, distance }: { containerId: string, distance: number }) {

  const [currentDistance, setCurrentDistance] = React.useState(0);

  useGSAP(() => {
    gsap.fromTo(`#${containerId}-race-path`,
      {
        drawSVG: "0%",
      },
      {
        drawSVG: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: `#${containerId}`,
          start: "top top",
          end: `+=${distance / 5}px`,
          scrub: true,
          onUpdate: (e) => {
            const progressDistance = e.progress * distance;
            setCurrentDistance(Math.round(progressDistance));
          }
        }
      }
    );
  })

  return (
    <React.Fragment>
      <div className="top-0 right-0 absolute">
        <NumberFlow value={(currentDistance / 1000)}
          className="font-mono font-extrabold text-4xl"
          plugins={[continuous]}
          suffix=" km"
          format={{
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }}
        />
      </div>
      <svg width="100%" height="100%" viewBox="0 0 1211 609" version="1.1" xmlns="http://www.w3.org/2000/svg" className="fixed inset-0">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Artboard" transform="translate(0.000000, 1.000000)">
            <g id="Path-2" transform="translate(0.368530, -0.214395)">
              <rect id="Rectangle" x="0" y="0" width="1210" height="608"></rect>
              <path strokeWidth={2} stroke="var(--color-orange-500)" d="M511.742352,335.663343 L245.225532,364.431152 C216.826281,367.496565 191.271082,347.080714 187.989392,318.705642 L178.248846,234.484199 C176.951854,223.269789 171.046761,213.100841 161.949653,206.415948 L157.50885,203.152681 C151.063736,198.416572 143.526437,195.385725 135.596752,194.341537 L129.784081,193.57612 C125.70478,193.038954 121.898436,191.23012 118.905679,188.406532 C115.893092,185.564236 113.707452,181.958358 112.581337,177.972609 L99.4072701,131.344551 C97.1477608,123.347284 101.799132,115.032524 109.7964,112.773014 C111.127595,112.396905 112.504296,112.206155 113.887603,112.206155 L119.486809,112.206155 C128.45774,112.206156 137.276094,114.526995 145.084781,118.943104 C182.801903,140.273567 217.232792,148.171878 248.377447,142.638038 C282.60839,136.55582 357.165079,122.868916 472.047516,101.577324 L472.047516,101.577324 L503.11969,77 C518.863784,85.0714431 539.495383,91.2253512 565.014488,95.4617242 C588.690479,99.392126 597.813585,86.1915033 617.324622,89.0653812 C628.578366,90.7230014 646.414389,97.2998237 670.832688,108.795848 C673.615118,110.105781 674.808791,113.423304 673.49884,116.205726 C673.224501,116.788438 672.851151,117.31914 672.395395,117.774224 C669.126709,121.038098 668.527886,126.119775 670.948344,130.054056 L690.321923,161.544425 C697.792655,173.687567 699.94988,188.365494 696.288965,202.144661 C692.601707,216.022979 695.230716,228.454821 704.175993,239.440188 C733.813258,275.836628 718.773971,286.21327 704.175993,314.019377 C703.408492,315.481308 646.804687,321.84924 534.364581,333.123171 L534.364581,333.123171" strokeLinecap="round" strokeLinejoin="round" id={`${containerId}-race-path`} />
            </g>
          </g>
        </g>
      </svg>
    </React.Fragment>
  )
}