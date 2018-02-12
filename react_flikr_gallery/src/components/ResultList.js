import React from 'react';

import PhotoList from './PhotoList';
import Photo from './Photo';
import NotFound from './NotFound';

const ResultList = (props) => {
	//																														https:// + farm{farm-id} + .staticflickr.com/ + {server-id} + / + {id} + _ + {secret} + .jpg
	const results = props.data;
	// Loop threw photos data
	let photos = results.map(photo =>
		<Photo key={photo.id} url={'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg'}/>);

// Test for 404 error code for photos
	const isNoResults = results.length;

	return (
		<div>
			{
				(isNoResults > 0)
					? <PhotoList
						title={props.title}
						photos={photos}/>
					: <NotFound />
				}
		</div>
	);
}


export default ResultList;
