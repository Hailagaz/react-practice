import './App.css';
import Chapter1 from './chapter1';
import Chapter2 from './chapter2';
import { Profile } from './chapter2';
import Chapter3 from './chapter3';

function App() {
	return (
		<div className="App">
			<Chapter1 />
			
			<Chapter2 />
			<h2>Chapter 2. Part 2</h2>
			<Profile />

			<Chapter3 />
		</div>
	);
}

export default App;
