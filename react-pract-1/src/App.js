import './App.css';
import Chapter1 from './chapter1';
import Chapter2 from './chapter2';
import { Profile } from './chapter2';

function App() {
	return (
		<div className="App">
			<Chapter1 />
			<Chapter2 />
			<h2>Chapter 2. Part 2</h2>
			<Profile />
		</div>
	);
}

export default App;
