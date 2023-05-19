export default function Chapter4() {
	return (
		<>
			<h2>Chapter 4, Part 1</h2>
			<Avatar />
			<h2>Chapter 4, Part 2</h2>
			<ToDoList />
		</>
	);
}

function Avatar() {
	const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
	const descr = "Gregorio Y. Zara"

	return (
		<img
			className="avatar"
			src={avatar}
			alt={descr}
		/>
	);
}

function ToDoList() {
	const name = 'Hedy Lamarr';
	return (
		<>
			<h1>{name}'s ToDo List for {formatDate(today)}</h1>
			<ul style={{
				backgroundColor: 'black',
				color: 'pink'
			}}>
				<li>Improve the videophone</li>
				<li>Prepare aeronautics lectures</li>
				<li>Work on the alcohol-fuelled engine</li>
			</ul>
		</>
	);
}

const today = new Date();

function formatDate(date) {
	return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
}