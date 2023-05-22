export default function Chapter5() {
	return (
		<>
			<br />
			<h2>Chapter 5. Part 1</h2>
			<Avatar 
				person={
					{
						name: 'Lin Lanying',
						imageId: '1bX5QH6'
					}
				}
				size={100}
			/>
		</>
	);
}

function Avatar({ person, size }) {
	return (
		<>
			<img
				className='avatar'
				src="https://i.imgur.com/" + {this.props.person.imageId} + ".jpg"
				alt={this.props.person.name}
				width={this.props.size}
				height={this.props.size}
			/>
		</>
	);
}