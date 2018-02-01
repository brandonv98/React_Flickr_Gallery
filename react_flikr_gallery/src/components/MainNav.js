import React from 'react';

const MainNav = (props) => {

	const navData = props.navNames;
	let links = navData.map(name => <li key={name.toString()}><a onClick={props.handleClick}>{name} </a></li>);

		return (
			<nav className="main-nav">
		    <ul>
						{links}
		    </ul>
		  </nav>
		);
}



export default MainNav;
