import './App.css';
import Chapter1 from './chapters/chapter1';
import Chapter2 from './chapters/chapter2';
import { Profile } from './chapters/chapter2';
import Chapter3 from './chapters/chapter3';
import Chapter4 from './chapters/chapter4';
import Chapter5 from './chapters/chapter5';
import Chapter6 from './chapters/chapter6';
import Chapter7 from './chapters/chapter7';
import Chapter8 from './chapters/chapter8';
import Chapter9 from './chapters/chapter9';

function App() {
	return (
		<div className="App">
			<Chapter1 />
			
			<Chapter2 />
			<h2>Chapter 2. Part 2</h2>
			<Profile />

			<Chapter3 />

			<Chapter4 />

			<Chapter5 />
			
			<Chapter6 />

			<Chapter7 />

			<Chapter8 />

			<Chapter9 />
		</div>
	);
}

export default App;
