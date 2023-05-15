import './App.css';

function TableOfContents() {
	return (
		<article className='tableOfContents'>
			<h1>My First Component</h1>
			<ol>
				<li>Components: UI Building Blocks</li>
				<li>Defining a Component</li>
				<li>Using a Component</li>
			</ol>
		</article>
	);
}

function Profile() {
	return (
		<img
			src='https://i.imgur.com/MK3eW3As.jpg'
			alt="Katherine Johnson"
		/>
	);
}

function App() {
	return (
		<div className="App">

			<TableOfContents />
			<section>
				<h2>Example</h2>
				<Profile />
				<Profile />
				<Profile />
			</section>


		</div>
	);
}

export default App;
