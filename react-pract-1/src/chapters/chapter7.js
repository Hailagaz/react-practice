import { getImageUrl } from "../utils/utils";
import { listOne } from "../utils/data";
import { listTwo } from "../utils/data";

export default function Chapter7() {
	return (
		<>
			<h2>Chapter 7. Part 1</h2>
			<List1 people={listOne} />
			<h2>Chapter 7. Part 2</h2>
			<List2 people={listTwo} />
		</>
	);
}

function List1({ people }) {
	let listItems = people.map(person => <li>{person}</li>)
	return (
		<div>
			<p>List of people and their professions</p>
			<ul>
				{listItems}
			</ul>
		</div>
	);
}

function List2({ people }) {
	return (
		<div>
			<p>List of filered people by their profession</p>

		</div>
	);
}