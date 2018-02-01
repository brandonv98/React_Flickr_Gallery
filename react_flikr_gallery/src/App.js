import React, { Component } from 'react';
import './App.css';

//dependency's import
import { Router, Route, BrowserRouter } from 'react-router';
import axios from 'axios';

//apiKey secret ;)
import apiKey from './config';

//App Components
import Form from './components/Form';
import ResultList from './components/ResultList';
import MainNav from './components/MainNav';


class App extends Component {

	constructor() {
		super();
		this.state = {
			photos: [],
			loading: false,
			searchText: '',
		};
	}


	componentDidMount() {
		this.preformSearch();
	}

	preformSearch = (query = 'code') => {
		// Make a request for a user with a given ID
		axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
			.then(response => {
				this.setState({
					photos: response.data.photos.photo,

				});
			})
			.catch(error => {
				console.log('Error fetching and parsing the data', error);
			});
	}

	handleClick = (e) => {
		    e.preventDefault();
		    console.log('Array value is : ', e.target.textContent);
				this.preformSearch(e.target.textContent);
		  }

	render() {
		console.log(this.state.photos);
		return (
			<div className="App">

          <div class="container">
            <Form
							onSearch={this.preformSearch}
						 />

						 <MainNav
			 				handleClick={this.handleClick}
			 				type="Dog"/>

          	<ResultList
            	title='Results'
            	data={this.state.photos}
						/>
          </div>

      </div>
		);
	}
}

export default App;
