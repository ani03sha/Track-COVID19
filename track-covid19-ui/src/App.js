import React, { Component } from 'react';
import SearchForm from './components/searchForm/SearchForm';
import ShowData from './components/showData/ShowData';
import Table from './components/table/Table';
import { countryHelper } from './helper';
import './App.css';


class App extends Component {

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
		countryNewsItems: {},
		error: null
	}

	getCountryData = async (e) => {
		e.preventDefault();
		const countryName = e.target.elements.countryName.value;
		const countryCode = countryHelper(countryName)[1];
		if (countryCode) {
			const URLCountry = `https://thevirustracker.com/free-api?countryTotal=${countryCode}`;
			const requestData = await fetch(URLCountry);
			const responseData = await requestData.json();
			const URLCountryNews = `https://thevirustracker.com/free-api?countryNewsTotal=${countryCode}`;
			const requestCountryNews = await fetch(URLCountryNews);
			const responseCountryNews = await requestCountryNews.json();
			if(responseData.countrydata) {
				const data = responseData.countrydata[0];
				const newsItems = responseCountryNews.countrynewsitems[0];
				this.setState({
					countryName: data.info.title,
					totalCases: data.total_cases,
					totalRecovered: data.total_recovered,
					totalUnresolved: data.total_unresolved,
					totalDeaths: data.total_deaths,
					totalNewCasesToday: data.total_new_cases_today,
					totalNewDeathsToday: data.total_new_deaths_today,
					totalActiveCases: data.total_active_cases,
					totalSeriousCases: data.total_serious_cases,
					countryNewsItems: newsItems,
					error: null
				});
			} else {
				this.setState({
					countryName: undefined,
					totalCases: undefined,
					totalRecovered: undefined,
					totalUnresolved: undefined,
					totalDeaths: undefined,
					totalNewCasesToday: undefined,
					totalNewDeathsToday: undefined,
					totalActiveCases: undefined,
					totalSeriousCases: undefined,
					countryNewsItems: {},
					error: 'No such country'
				});
			}
		} else {
			this.setState({
				countryName: undefined,
				totalCases: undefined,
				totalRecovered: undefined,
				totalUnresolved: undefined,
				totalDeaths: undefined,
				totalNewCasesToday: undefined,
				totalNewDeathsToday: undefined,
				totalActiveCases: undefined,
				totalSeriousCases: undefined,
				countryNewsItems: {},
				error: 'Please enter a value'
			});
		}
	}

	render() {
		return(
			<div>
				<SearchForm getCountryData={this.getCountryData} />
				{Object.keys(this.state.countryNewsItems).length !== 0 && this.state.countryNewsItems.constructor === Object ? 
				<div>
				<Table 
				 	countryName = { this.state.countryName }
					totalCases = { this.state.totalCases } 
					totalRecovered = { this.state.totalRecovered }
					totalUnresolved = { this.state.totalUnresolved }
					totalDeaths = { this.state.totalDeaths }
					totalNewDeathsToday = { this.state.totalNewDeathsToday }
					totalNewCasesToday = { this.state.totalNewCasesToday }
					totalActiveCases = { this.state.totalActiveCases }
					totalSeriousCases = { this.state.totalSeriousCases }
				/>
				<h3 style={{textAlign: "center", padding: "20px"}}>Related Articles</h3> 
				</div>: <div></div>
			}
				{
				this.state.error !== null ? <div style={{ color: "#fff", textAlign:"center" }}>
						{this.state.error}
					</div> :
					<ShowData countryNewsItems = { this.state.countryNewsItems }
					/>
				}
			</div>
		);
	}
}

export default App;
