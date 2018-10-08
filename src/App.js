import React, { Component } from 'react';
import './App.css';

//dependency's import
import {
	BrowserRouter,
	Route,
} from 'react-router-dom';

//App Components
import index from './components';



class App extends Component {


	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Route path='/' component={index} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
