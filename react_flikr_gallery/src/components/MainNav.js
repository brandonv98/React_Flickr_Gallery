import React from 'react';

const MainNav = (props) => {

	const navData = props.navNames; //navNames data
	let links = navData.map(name =>
		<li key={name.toString()}>
			<a onClick={props.handleClick}>{name}
		</a></li>);
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
