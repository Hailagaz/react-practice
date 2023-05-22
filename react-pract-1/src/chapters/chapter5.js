import { getImageUrl } from "../utils/utils";

export default function Chapter5() {
	return (
		<>
			<br />
			<h2>Chapter 5. Part 1</h2>
			
			<h2>Chapter 5. Part 2</h2>
			<div>
				<Avatar
					size={100}
					person={
						{
							name: 'Katsuko Saruhashi',
							imageId: 'YfeOqp2'
						}
					}
				/>
				<Avatar 
					size={75}
					person={
						{
							name: 'Aklilu Lemma',
							imageId: 'OKS67lh'
						}
					}
				/>
				<Avatar 
					size={50}
					person={
						{
							name: 'Lin Lanying',
							imageId: '1bX5QH6'
						}
					}
				/>
			</div>
		</>
	);
}

function Avatar({ person, size }) {
	return (
		<img
			className="avatar"
			src={getImageUrl(person)}
			alt={person.name}
			width={size}
			height={size}
		/>
	);
}