import React, { Component } from 'react';
import './App.css';

//dependency's import
import axios from 'axios';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

//apiKey secret ;)
import apiKey from './config';

//App Components
import Form from './components/Form';
import ResultList from './components/ResultList';
import MainNav from './components/MainNav';
import NotFound from './components/NotFound';


class App extends Component {

	constructor() {
		super();
		this.state = { // App State
			photos: [],
			isLoading: true, // Is loading new images?
			searchText: '', // Title for user's results
			navName: ['Cats', 'Dogs', 'Computers'], // Nav link names
		};
	}


	componentDidMount() {
		this.preformSearch();
	}
//API Connection
// more information found here : https://github.com/axios/axios
	preformSearch = (query = 'code') => {
		// Make a request for a user with a given ID
		axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
			.then(response => {
				this.setState({
					photos: response.data.photos.photo, // Array Data
					searchText: query, // Results Title
					isLoading: false, // Oviii :)
				});
			})
			.catch(error => {
				console.log('Error fetching and parsing the data', error);
			});
	}

// Navigation handling
	handleClick = (e) => {
		    console.log('Array value is : ', e.target.textContent);
				this.preformSearch(e.target.textContent);
				}


	render() {
		return (
			// <div className="App">

						 <BrowserRouter>
							 <div className="container">

								 <Form
									 onSearch={this.preformSearch}
								 />

									 <MainNav
										 handleClick={this.handleClick}
										 navNames={this.state.navName}
								 />
								 {/* <Switch> */}

	 							 	<Route exact path={`/${this.state.searchText}:name`} render={ () =>
											<Form
	 		 									onSearch={this.preformSearch}
	 										/>
											}
										/>

										<Route exact path={`/${this.state.searchText}`} render={ () =>

				 								(this.state.isLoading)
				 								? <p>LOADING...</p>
				 								: <ResultList
				 	            			title={this.state.searchText}
				 	            			data={this.state.photos}
				 								/>

										}
										/>

										<Route component={NotFound}/>
								{/* </Switch> */}
	          	</div>
						</BrowserRouter>
		);
	}
}

export default App;
