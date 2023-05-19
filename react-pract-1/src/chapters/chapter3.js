export default function Chapter3() {
	return (
		<section>
			<h2>Chapter 3</h2>
			<ToDoList />
		</section>
	);
}

function ToDoList() {
	return (
		<>
			<h1>Hedy Lamarr's Todos</h1>
			<img
				src="https://i.imgur.com/yXOvdOSs.jpg"
				alt="Hedy Lamarr"
				className="photo"
			/>
			<ul>
				<li>Invent new traffic lights</li>
				<li>Rehearse a movie scene</li>
				<li>Improve the spectrum technology</li>
			</ul>
		</>
	);
}