import React, { Component, useDebugValue } from 'react';
import './App.css';
import SearchForm from './components/searchForm/SearchForm';
import ShowData from './components/showData/ShowData';

class App extends Component {


	/**
	 * countrydata ": [ {
	 	"info": {
	 		"ourid": 72,
	 		"title": "India",
	 		"code": "IN",
	 		"source": "https://thevirustracker.com/india-coronavirus-information-in"
	 	},
	 	"total_cases": 137,
	 	"total_recovered": 14,
	 	"total_unresolved": 0,
	 	"total_deaths": 3,
	 	"total_new_cases_today": 8,
	 	"total_new_deaths_today": 1,
	 	"total_active_cases": 120,
	 	"total_serious_cases": 0
	 }
	 */

	state = {
		countryName: undefined,
		totalCases: undefined,
		totalRecovered: undefined,
		totalUnresolved: undefined,
		totalDeaths: undefined,
		totalNewCasesToday: undefined,
		totalNewDeathsToday: undefined,
		totalActiveCases: undefined,
		totalSeriousCases: undefined,
		error: null

	}

	getCountryData = async (e) => {
		e.preventDefault();
		const countryCode = e.target.elements.countryCode.value;
		const URL = `https://thevirustracker.com/free-api?countryTotal=${countryCode}`;
		const request = await fetch(URL);
		const response = await request.json();
		const data = response.countrydata[0]
		if(countryCode) {
			this.setState({
				countryName: data.info.title,
				totalCases: data.total_cases,
				totalRecovered : data.total_recovered,
				totalUnresolved: data.total_unresolved,
				totalDeaths: data.total_deaths,
				totalNewCasesToday: data.total_new_cases_today,
				totalNewDeathsToday: data.total_new_deaths_today,
				totalActiveCases: data.total_active_cases,
				totalSeriousCases: data.total_serious_cases
			}); 
		} else {
			this.setState({
				error: 'Please enter a value'
			});
		}
	}

	render() {
		return(
			<div>
				<SearchForm getCountryData={this.getCountryData} />
				{
					this.state.error !== null ? <div style={{ color: "#fff", textAlign:"center" }}>
						{this.state.error}
					</div> :
					<ShowData countryName = { this.state.countryName }
							  totalCases = { this.state.totalCases } 
							  totalRecovered = { this.state.totalRecovered }
							  totalUnresolved = { this.state.totalUnresolved }
							  totalDeaths = { this.state.totalDeaths }
							  totalNewDeathsToday = { this.state.totalNewDeathsToday }
							  totalNewCasesToday = { this.state.totalNewCasesToday }
							  totalActiveCases = { this.state.totalActiveCases }
							  totalSeriousCases = { this.state.totalSeriousCases }
							/>
				}
			</div>
		);
	}
}

export default App;
