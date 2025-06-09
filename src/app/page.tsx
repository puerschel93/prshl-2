import { Main } from "@/components/main";
import { Races } from "@/components/races";
import React from "react";

export default function Home() {
	/** Render */
	return (
		<React.Fragment>
			<Main />
			<Races />
			<div className="border-white border-t w-screen h-screen" />
		</React.Fragment>
	);
}
