function TableOfContents() {
	return (
		<section className='tableOfContents'>
			<ol>
				<li>Components: UI Building Blocks</li>
				<li>Defining a Component</li>
				<li>Using a Component</li>
			</ol>
		</section>
	);
}

function Profile() {
	return (
		<img
			src='https://i.imgur.com/MK3eW3As.jpg'
			alt="Katherine Johnson" />
	);
}

export default function Chapter1() {
	return (
		<section>
			<h2>Chapter 1. Part 1</h2>
			<TableOfContents />
			<h2>Chapter 1. Part 2</h2>
			<Profile />
			<Profile />
			<Profile />
		</section>
	);
}