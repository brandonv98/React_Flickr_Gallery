import React from 'react';

import {
	NavLink
} from 'react-router-dom';

// Images component
const Links = (props) => (
	<li>
    <NavLink to={`/search/${props.name}`} onClick={props.handleClick}>{props.name}</NavLink>
	</li>
);



export default Links;
