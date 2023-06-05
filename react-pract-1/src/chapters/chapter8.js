export default function Chapter8() {
	return (
		<>
			<h1>Chapter 8. Part 1</h1>
			<Part1 />
		</>
	);
}

function Part1() {

	return (
		<div>
			<p>Keep component pure all the times.
				Don't changable variables (change count in props but not by counting).
				Formula-like behavior</p>
			<Cup guest={1} />
			<Cup guest={2} />
			<Cup guest={3} />
		</div>
	);
}

function Cup({ guest }) {
	return <h2>Tea cup for guest #{guest}</h2>;
}