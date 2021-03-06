import React from 'react';
// import {
// 	NavLink
// } from 'react-router-dom';

import Links from './Links';

const MainNav = (props) => {

	const navData = props.navNames; //navNames data
	let links = navData.map(name =>
		<Links key={name.toString()} name={name} handleClick={props.handleClick}></Links>
	);
// add the links dynamicly form "navName" state
		return (
			<nav className="main-nav">
		    <ul>
					{/* link names */}
						{links}
		    </ul>
		  </nav>
		);
}



export default MainNav;
