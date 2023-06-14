import { useState } from "react";
import { sculptureList2 } from "../utils/data";

export default function Chapter11() {
	return (
		<>
			<h1>Chapter 11. Part1</h1>
			<Part1 />
		</>
	);
}

function Part1() {
	return (
		<>
			<Gallery />
		</>
	);
}

function Gallery() {
	//let index = 0;
	const [index, setIndex] = useState(0);
	function handleClick() {
		//index = index + 1;
		if (index === sculptureList2.length - 1) {
			setIndex(i => i = 0);
		}
		setIndex(i => i + 1);
	}

	let sculpture = sculptureList2[index];
	return (
		<>
			<button onClick={handleClick}>
				Next
			</button>
			<h2>
				<i>{sculpture.name} </i>
				by {sculpture.artist}
			</h2>
			<h3>
				({index + 1} of {sculptureList2.length})
			</h3>
			<img
				src={sculpture.url}
				alt={sculpture.alt}
			/>
			<p>
				{sculpture.description}
			</p>
		</>
	);
}
