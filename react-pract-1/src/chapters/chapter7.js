import { getImageUrl } from "../utils/utils";
import { listOne } from "../utils/data";
import { listTwo } from "../utils/data";
import { recipes } from "../utils/data";

export default function Chapter7() {
	return (
		<>
			<h2>Chapter 7. Part 1</h2>
			<List1 people={listOne} />
			<h2>Chapter 7. Part 2</h2>
			<List2 people={listTwo} />
			<h2>Chapter 7. Part 3</h2>
			<RecipeList recipes={recipes} />
		</>
	);
}

function List1({ people }) {
	let listItems = people.map(person => <li >{person}</li>)
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

	let chemists = people.filter(person => person.profession === 'chemist');
	let listProfsItem = chemists.map(person => <>
		<li key={person.id}>
			<img src={getImageUrl(person)} alt={person.name} />
		</li>
		<p>
			<b>{person.name}:</b>
			{' ' + person.profession + ' '}
			known for {person.accomplishment}
		</p>
	</>);
	return (
		<div>
			<p>List of filtered people by their profession</p>
			<ul>
				{listProfsItem}
			</ul>
		</div>
	);
}

function RecipeList({ recipes }) {
	let result = recipes.map(recipe => 
		<div key={recipe.id}>
			<h3>{recipe.name}</h3>
			<ul>
				{recipe.ingredients.map(ingredient =>
					<li key={ingredient}>
						{ingredient}
					</li>)}
			</ul>
		</div>);

	return (
		<div>
			<h3>List of recipes and ingredients</h3>
			{result}
		</div>

	);
}