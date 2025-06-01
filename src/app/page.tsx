import { Race } from "@/components/race";
import React from "react";

export default function Home() {
  /** Render */
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <h1 data-speed={1} className="font-bold text-6xl text-center">
          THIS IS A TEST 1
        </h1>
        <h1 data-speed={0.95} className="font-bold text-6xl text-center">
          THIS IS A TEST 1
        </h1>
        <h1 data-speed={0.9} className="font-bold text-6xl text-center">
          THIS IS A TEST 1
        </h1>
      </div>
      <Race index={0} distance={10_000} />
      <Race index={1} distance={42_195} />
    </React.Fragment>
  );
}
