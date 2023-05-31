export default function Chapter7() {
	return (
		<>
			<h2>Chapter 7. Part 1</h2>
			<List people={listO} />
		</>
	);
}

function List({ people }) {
	let listItems = people.map(person => <li>{person}</li>)
	return (
		<>
			<p>List of people and their professions</p>
			{listItems}
		</>
	);
}

let listO = [
	'Creola Katherine Johnson: mathematician',
	'Mario José Molina-Pasquel Henríquez: chemist',
	'Mohammad Abdus Salam: physicist',
	'Percy Lavon Julian: chemist',
	'Subrahmanyan Chandrasekhar: astrophysicist'
];