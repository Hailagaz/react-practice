export default function Chapter6() {
	return (
		<>
			<h2>Chapter 6. Part 1</h2>
			<PackingList />
		</>
	);
}

function PackingList() {
	return (
		<section>
			<h3>Temporary packing list</h3>
			<ul>
				<Item 
					isPacked={true}
					name="Space suit" 
				/>
				<Item
					isPacked={true}
					name="Helmet with a golden leaf" 
				/>
				<Item
					isPacked={false}
					name="Photo of Tam" 
				/>
			</ul>
		</section>
	);
}

function Item({name, isPacked}) {
	return (
		<>
			<li className='item'>{name}</li>
		</>
	);
}