import { useState } from 'react';


export default function Chapter10() {
	return (
		<>
			<h1>Chapter 10. Part 1</h1>
			<Part1 />
		</>
	);
}

function Part1() {
	return (
		<>
			<Button1 />
		</>
	);
}

function Button1() {
	function handleClick() {
		alert('Button clicked!');
	}
	return (
		<button onClick={handleClick}>
			Button with some effect
		</button>
	);
}