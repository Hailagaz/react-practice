import './App.css';

function TableOfContents() {
	return (
		<section className='tableOfContents'>
			<h2>Chapter 1. Part 1</h2>
			<ol>
				<li>Components: UI Building Blocks</li>
				<li>Defining a Component</li>
				<li>Using a Component</li>
			</ol>
		</section>
	);
}

function ProfilePart() {
	return (
		<img
			src='https://i.imgur.com/MK3eW3As.jpg'
			alt="Katherine Johnson" />
	);
}

function Profile() {
	return (
		<section>
			<h2>Chapter 1. Part 2</h2>
			<ProfilePart />
			<ProfilePart />
			<ProfilePart />
		</section>
	);
}

function App() {
	return (
		<div className="App">
			<TableOfContents />
			<Profile />
		</div>
	);
}

export default App;
