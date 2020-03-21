import React from 'react';
import './SearchForm.css';

const SearchForm = ({ getCountryData }) => {
    return(
        <div className="search">
            <h1>Track CoronaVirus</h1>
            <div onSubmit={ getCountryData } className="search">
                <form className = "search__form">
                    <input type="text" autoComplete="off" name="countryName" placeholder="Country"/>
                    <button className="btn btn-primary btn-block">Track</button>
                </form>
            </div>
        </div>
        );
}

export default SearchForm;