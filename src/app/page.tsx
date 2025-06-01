import { Main } from "@/components/main";
import { Race } from "@/components/race";
import React from "react";

export default function Home() {
  /** Render */
  return (
    <React.Fragment>
      <Main />
      <Race index={0} distance={10_000} />
      <Race index={1} distance={42_195} />
    </React.Fragment>
  );
}
