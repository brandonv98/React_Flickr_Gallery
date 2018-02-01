import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const ResultList = props => {
	//																														https:// + farm{farm-id} + .staticflickr.com/ + {server-id} + / + {id} + _ + {secret} + .jpg
	const results = props.data;
	let photos = results.map(photo => <Photo key={photo.id} url={'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg'}/>);

	return (
		<div class="photo-container">
			<h2>{props.title}</h2>
			<ul>
	      {photos}
	    </ul>
	</div>
	);
}

{ /* <NotFound /> */ }



export default ResultList;
