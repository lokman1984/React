import React from 'react';

const DogPhoto = ({ image }) => {
	return (
		<div className="dogImg">
			<img src={image} alt="dog" />
		</div>
	);
};

export default DogPhoto;
