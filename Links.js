import React from 'react';

const NavLinks = (props) => (
			<li>
				<a onClick={props.handleClick}>{props.names}</a>
			</li>
		);



export default NavLinks;
