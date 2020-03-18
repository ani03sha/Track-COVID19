import React from 'react';
import './SearchForm.css';

const SearchForm = ({ getCountryData }) => {
    return(
        <div className="search">
            <h1>Track COVID19</h1>
            <div onSubmit={ getCountryData } className="search">
                <form className = "search__form">
                    <input type="text" autoComplete="off" name="countryName" placeholder="Enter country name, e.g. India" />
                    <button>Track</button>
                </form>
            </div>
        </div>
        );
}

export default SearchForm;