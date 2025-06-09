"use client";

/** Props Interface */
interface RaceProps {
	index: number;
}

export function Race({ index }: RaceProps) {
	/** Render */
	return (
		<div className="flex-shrink-0 pr-[5%] w-[105%] h-[50vh] race-item-container">
			<div
				className="flex-shrink-0 bg-neutral-900 rounded-xl w-[100%] h-[50vh] race-item"
				id={`race-item-${index}`}
				style={{
					opacity: 1 - index * 0.1,
				}}
			/>
		</div>
	);
}
