import React from 'react';

const PhotoList = props => {

	return (
		<div className="photo-container">
			<h2>{props.title}</h2>
			<ul>
		   	{props.photos}
		  </ul>
		</div>
	);
}





export default PhotoList;
