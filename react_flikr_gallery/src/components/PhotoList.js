import React from 'react';

//Image list component
const PhotoList = props => {

	return (
		<div className="photo-container">
			<h2>Results for {props.title}</h2>
			<ul>
		   	{props.photos}
		  </ul>
		</div>
	);
}





export default PhotoList;
