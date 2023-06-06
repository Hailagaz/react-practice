import { sculptureList } from "../utils/data";
import { useState } from 'react';

export default function Chapter9() {
	return (
		<div>
			<h1>Chapter 9. Part 1</h1>
			<Part1 />
			<h1>Chapter 9. Part 2</h1>
			<Part2 />
		</div>
	);
}

function Part1() {
	return (
		<Toolbar 
			onPlayMovie={() => alert('Playing')}
			onUploadImage={() => alert('Uploading')}
		/>
	);
}
function Toolbar({onPlayMovie, onUploadImage}) {
	return (
		<div>
			<Button onClick={onPlayMovie}>Play Movie</Button>
			<Button onClick={onUploadImage}>Upload Image</Button>
		</div>
	);
}
function Button({onClick, children}) {
	return (
		<button onClick={onClick}>{children}</button>
	);
}

function Part2() {
	return (
		<Gallery sculptureList={sculptureList}/>
	);
}

function Gallery({sculptureList}) {
	const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);
	const hasNext = index < sculptureList.length - 1;

	function handleNextClick() {
		if (hasNext) {
			setIndex(index + 1);
		} else {
			setIndex(0);
		}
	}

	function handleMoreClick() {
		setShowMore(!showMore);
	}

	let sculpture = sculptureList[index];

	return (
		<>
			<button onClick={handleNextClick}>Next</button>
			<h4>{sculpture.name} by {sculpture.artist}</h4>
			<h5>({index + 1} of {sculptureList.length})</h5>
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