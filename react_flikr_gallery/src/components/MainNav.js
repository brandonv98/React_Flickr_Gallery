import React from 'react';

const MainNav = (props) => (
	<nav className="main-nav">
    <ul>
      <li><a onClick={props.handleClick}>Cats</a></li>
      <li><a onClick={props.handleClick}>{props.type}</a></li>
      <li><a onClick={props.handleClick}>Computers</a></li>
    </ul>
  </nav>
);



export default MainNav;
