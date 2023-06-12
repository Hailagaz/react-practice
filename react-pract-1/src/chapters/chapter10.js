import { useState } from 'react';


export default function Chapter10() {
	return (
		<>
			<h1>Chapter 10. Part 1</h1>
			<Part1 />
			<h1>Chapter 10. Part 2</h1>
			<Part2 />
			<h1>Chapter 10. Part 3</h1>
			<Part3 />
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

function Part3() {
	return (
		<>
			<Toolbar2 />
		</>
	);
}

function Toolbar2() {
	return (
		<div>
			<PlayButton movieName="Kiki's Delivery Service" />
			<UploadButton />
		</div>
	);
}

function PlayButton({ movieName }) {
	function handlePlayClick() {
		alert(`Playing ${movieName}!`);
	}

	return (
		<Button onClick={handlePlayClick}>
			Play "{movieName}"
		</Button>
	);
}

function UploadButton() {
	return (
		<Button onClick={() => alert('Uploading!')}>
			Upload Image
		</Button>
	);
}

function Button({ onClick, children }) {
	return (
		<button onClick={onClick}>
			{children}
		</button>
	);
}
