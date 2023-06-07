import { sculptureList1 } from "../utils/data";
import { useState } from 'react';

export default function Chapter9() {
	return (
		<div>
			<h1>Chapter 9. Part 1</h1>
			<Part1 />
			<h1>Chapter 9. Part 2</h1>
			<Part2 />
			<h1>Chapter 9. Part 3</h1>
			<Part3 />
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
function Toolbar({ onPlayMovie, onUploadImage }) {
	return (
		<div>
			<Button onClick={onPlayMovie}>Play Movie</Button>
			<Button onClick={onUploadImage}>Upload Image</Button>
		</div>
	);
}
function Button({ onClick, children }) {
	return (
		<button onClick={onClick}>{children}</button>
	);
}

function Part2() {
	return (
		<Gallery sculptureList={sculptureList1} />
	);
}

function Gallery({ sculptureList }) {
	const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);

	function handleNextClick() {
		if (index < sculptureList.length - 1) {
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

function Part3() {
	return (
		<>
			<h3>Form</h3>
			<Form />
			<h3>Increment</h3>
			<Counter />
		</>
	);
}

function Form() {
	const [to, setTo] = useState('Alice');
	const [message, setMessage] = useState('Hello');

	function handleSubmit(e) {
		e.preventDefault();
		setTimeout(() => {
			alert(`You said ${message} to ${to}`);
		}, 5000);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				To:{' '}
				<select
					value={to}
					onChange={e => setTo(e.target.value)}>
					<option value="Alice">Alice</option>
					<option value="Bob">Bob</option>
				</select>
			</label>
			<textarea
				placeholder="Message"
				value={message}
				onChange={e => setMessage(e.target.value)}
			/>
			<button type="submit">Send</button>
		</form>
	);
}

function Counter() {
	const [score, setScore] = useState(0);

	function increment() {
		setScore(score + 1);
	}

	return (
		<>
			<button onClick={() => increment()}>+1</button>
			<button onClick={() => {
				increment();
				increment();
				increment();
			}}>+3</button>
			<h1>Score: {score}</h1>
		</>
	)
}
