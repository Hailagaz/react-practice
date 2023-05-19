import './App.css';
import Chapter1 from './chapters/chapter1';
import Chapter2 from './chapters/chapter2';
import { Profile } from './chapters/chapter2';
import Chapter3 from './chapters/chapter3';
import Chapter4 from './chapters/chapter4';


function App() {
	return (
		<div className="App">
			<Chapter1 />
			
			<Chapter2 />
			<h2>Chapter 2. Part 2</h2>
			<Profile />

			<Chapter3 />

			<Chapter4 />
		</div>
	);
}

export default App;
