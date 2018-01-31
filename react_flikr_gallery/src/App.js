import React, { Component } from 'react';
import './App.css';

//Router import
import { Router, Route, Switch } from 'react-router'

//App Components
import Form from './components/Form';
import MainNav from './components/MainNav';
import Results from './components/Results';


class App extends Component {
	render() {
		return (
			<div className="App">

          <div class="container">
            <Form />

            <MainNav />

            <Results />
          </div>

      </div>
		);
	}
}

export default App;
