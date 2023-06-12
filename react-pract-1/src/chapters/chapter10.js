import { useState } from 'react';


export default function Chapter10() {
	return (
		<>
			<h1>Chapter 10. Part 1</h1>
			<Part1 />
			<h1>Chapter 10. Part 2</h1>
			<Part2 />
		</>
	);
}

function Part1() {
	function handleClick() {
		alert('Button clicked!');
	}

	return (
		<>
			<button onClick={handleClick}>
				Button with some effect
			</button>
		</>
	);
}

function Part2() {
	return (
		<>
			<Toolbar />
		</>
	);
}

function Toolbar() {
	return (
		<div>
			<AlertButton message='Playing'>Play Movie</AlertButton>
			<AlertButton message='Uploading'>Upload Image</AlertButton>
			<AlertButton message='Showing'>Show something</AlertButton>

		</div>
	);
}

function AlertButton({message, children}) {
	return (
		<button onClick={() => alert(message)}>
			{children}
		</button>
	);
}