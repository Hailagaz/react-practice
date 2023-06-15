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
			<h6>Gallery 1</h6>
			<Gallery1 />
			<h6>gallery 2</h6>
			<Gallery2 />
			<Gallery2 />
		</>
	);
}

function Gallery1() {
	const [index, setIndex] = useState(0);

	function handleClick() {
		if (index === sculptureList2.length - 1) {
			setIndex(i => i = -1);
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

function Gallery2() {
	const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);

	function handleNextClick() {
		setIndex(index + 1);
	}

	function handleMoreClick() {
		setShowMore(!showMore);
	}

	let sculpture = sculptureList2[index];
	return (
		<>
			<button onClick={handleNextClick}>
				Next
			</button>
			<h2>
				<i>{sculpture.name} </i>
				by {sculpture.artist}
			</h2>
			<h3>
				({index + 1} of {sculptureList2.length})
			</h3>
			<button onClick={handleMoreClick}>
				{showMore ? 'Hide' : 'Show'} details
			</button>
			{showMore && <p>{sculpture.description}</p>}
			<img
				src={sculpture.url}
				alt={sculpture.alt}
			/>
		</>
	);
}
