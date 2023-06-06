export default function Chapter9() {
	return (
		<div>
			<h1>Chapter 9. Part 1</h1>
			<Part1 />
		</div>
	);
}

function Part1() {
	return (
		<Toolbar 
			onPlayMovie={() => alert('Playing')}
			onUploadImage={() => alert('Uploading')}
		/>
	);
}

function Toolbar({onPlayMovie, onUploadImage}) {
	return (
		<div>
			<Button onClick={onPlayMovie}>Play Movie</Button>
			<Button onClick={onUploadImage}>Upload Image</Button>
		</div>
	);
}

function Button({onClick, children}) {
	return (
		<button onClick={onClick}>{children}</button>
	);
}