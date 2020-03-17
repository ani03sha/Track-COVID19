import React from 'react';
import './SearchForm.css';

const SearchForm = ({ getCountryData }) => {
    return(
            <div onSubmit={ getCountryData } className="search">
                <form className = "search__form">
                    <input type="text" autoComplete="off" name="countryCode" placeholder="Enter name of the country" />
                    <button>Search</button>
                </form>
            </div>
        );
}

export default SearchForm;