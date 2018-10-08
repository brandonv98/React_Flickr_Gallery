import React, { Component } from 'react';

//dependency's import
import axios from 'axios';
import PropTypes from 'prop-types';
import {
	Route,
	Switch
} from 'react-router-dom';

//apiKey secret ;)
import apiKey from '../config';

//App Components
import Form from './Form';
import ResultList from './ResultList';
import MainNav from './MainNav';
import NotFound from './NotFound';




export default class RouteIndex extends Component {

// PropTypes that are Required
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }


	constructor() {
		super();
		this.state = { // App State
			photos: [],
			isLoading: true, // Is loading new images?
			resaultsTitle: 'code', // Title for user's results
			searchTextCache: '', // Search Cache
			navName: ['Cats', 'Dogs', 'Computers', 'Search'], // Nav link names
			perPage: 24 // Images to render to page.
		};
	}

	componentDidMount() {
		let query = this.props.match.params.data || this.state.resaultsTitle; // if not defined this will = 'code'
		this.preformSearch(query);
	}

	componentWillReceiveProps(nextProps) {
		this.setState(
			{ isLoading: true }); // isLoading handling
	}
	////////////////////////////
//API Connection
// more information found here : https://github.com/axios/axios
	preformSearch = (query) => {
		// Make a request for a user with a given ID
		axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${this.state.perPage}&format=json&nojsoncallback=1`)
			.then(response => {
				this.setState({
					photos: response.data.photos.photo, //Photo's Array Data
					resaultsTitle: query, // Results Title
					isLoading: false, // Set to False
				});
			})
			.catch(error => {
				console.log('Error fetching and parsing the data', error);
			});
	}

// Navigation handling
		handleClick = (e) => {
			this.preformSearch(e.target.textContent);
		}


	render() {

		return (
			<div>
						{/* Form component */}
					<Route exact path='/:navLinkData' render={ () => <div><h1 className='main--header'>Image Search Gallery</h1></div>}/>
			
					<Route path='/search' render={() => <Form onSearch={this.preformSearch} props={this.props} /> }/>
				

					{/* Navigation component */}
					<Route path='/' render={() =>
						<MainNav handleClick={this.handleClick} navNames={this.state.navName}/>} 
					/>

					{/* Not Found Switch */}
					
				<Switch>
					{/* Search Data */}
						<Route path={`/${this.state.resaultsTitle}`} render={() =>
					// {/* isLoading yes or no? Conditional (ternary) Operator */}
							(this.state.isLoading)
							? <div className="loader"></div>
							: <ResultList title={this.state.resaultsTitle} data={this.state.photos}/>
						 }/>

						 <Route path='/search/:searchData' render={() =>
					// {/* isLoading yes or no? Conditional (ternary) Operator */}
							(this.state.isLoading)
							? <div className="loader"></div>
							: <ResultList title={this.state.resaultsTitle} data={this.state.photos}/>
						 }/>
						
					
					<Route render={() => 
					(this.state.isLoading)
					? <div className="loader"></div>
					: <NotFound isLoading={this.state.isLoading} />} />
				</Switch>
		</div>

		);
	}
}
