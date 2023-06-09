import { useState } from "react";

export default function Chapter10() {
	return (
		<>
			<h1>Chapter 10. Part 1</h1>
			<Part1 />
			<h1>Chapter 10. Part 2</h1>
			<Part2 />
			<h1>Chapter 10. Part 3</h1>
			<Part3 />
			<h1>Chapter 10. Part 4</h1>
			<Part4 />
			<h1>Chapter 10. Part 5</h1>
			<Part5 />
			<h1>Chapter 10. Part 6</h1>
			<Part6 />
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

function Part4() {
	return (
		<>
			<AppSpec />
			<h5>Another part below (stop propagation)</h5>
			<Toolbar4 />
		</>
	);
}

function AppSpec() {
	return (
		<Toolbar3
			onPlayMovie={() => alert('Playing!')}
			onUploadImage={() => alert('Uploading!')}
		/>
	);
}

function Toolbar3({ onPlayMovie, onUploadImage }) {
	return (
		<div>
			<Button3 onClick={onPlayMovie}>
				Play Movie
			</Button3>
			<Button3 onClick={onUploadImage}>
				Upload Image
			</Button3>
		</div>
	);
}

function Button3({ onClick, children }) {
	return (
		<button onClick={onClick}>
			{children}
		</button>
	);
}

function Toolbar4() {
	return (
		<div className="Toolbar" onClick={() => {
			alert('You clicked on the toolbar!');
		}}>
			<Button4 onClick={() => alert('Playing!')}>
				Play Movie
			</Button4>
			<Button4 onClick={() => alert('Uploading!')}>
				Upload Image
			</Button4>
		</div>
	);
}


function Button4({ onClick, children }) {
	return (
		<button onClick={e => {
			e.stopPropagation();
			onClick();
		}}>
			{children}
		</button>
	);
}

function Part5() {
	return (
		<>
			<p>standard behavior</p>
			<Signup1 />
			<p>preventDefault behavior</p>
			<Signup2 />
		</>
	);
}

function Signup1() {
	return (
		<form onSubmit={() => alert('Submitting!')}>
			<input />
			<button>Send</button>
		</form>
	);
}

function Signup2() {
	return (
		<form onSubmit={e => {
			e.preventDefault();
			alert('Submitting!');
		}}>
			<input />
			<button>Send</button>
		</form>
	);
}

function Part6() {
	return (
		<>
			<LightSwitch />
			<ColorSwitch />
		</>
	);
}

function LightSwitch() {
	function handleClick() {
		let bodyStyle = document.body.style;
		if (bodyStyle.backgroundColor === 'black') {
			bodyStyle.backgroundColor = 'white';
		} else {
			bodyStyle.backgroundColor = 'black';
		}
	}

	return (
		<button onClick={handleClick}>
			Toggle the lights
		</button>
	);
}

function ColorSwitch({onChangeColor}) {
	return (
		<button onClick={onChangeColor}>
			Change color
		</button>
	);
}


// function Color() {
// 	const [clicks, setClicks] = useState(0);

// 	function handleClickOutside() {
// 		setClicks(c => c + 1);
// 	}

// 	function getRandomLightColor() {
// 		let r = 150 + Math.round(100 * Math.random());
// 		let g = 150 + Math.round(100 * Math.random());
// 		let b = 150 + Math.round(100 * Math.random());
// 		return `rgb(${r}, ${g}, ${b})`;
// 	}

// 	function handleChangeColor() {
// 		let bodyStyle = document.body.style;
// 		bodyStyle.backgroundColor = getRandomLightColor();
// 	}

// 	return (
// 		<div style={{ width: '100%', height: '100%' }} onClick={handleClickOutside}>
// 			<ColorSwitch onChangeColor={handleChangeColor} />
// 			<br />
// 			<br />
// 			<h2>Clicks on the page: {clicks}</h2>
// 		</div>
// 	);
// }