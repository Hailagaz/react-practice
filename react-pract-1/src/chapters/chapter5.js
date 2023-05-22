import { getImageUrl } from "../utils/utils";

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
			<h2>Chapter 5. Part 2</h2>
			<Avatar 
				
			/>

		</>
	);
}

function Avatar({ person, size }) {
	return (
			<img
				className='avatar'
				src={getImageUrl(person)}
				alt={person.name}
				width={size}
				height={size}
			/>
	);
}