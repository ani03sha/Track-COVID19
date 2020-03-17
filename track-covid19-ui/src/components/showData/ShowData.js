import React from 'react';

const ShowData = (props) => {
    return(
        <div>
            Country: {props.countryName} <br />
            Total Cases: {props.totalCases} <br />
            Recovered: {props.totalRecovered} <br />
            Unresolved: {props.totalUnResolved} <br />
            Deaths: {props.totalDeaths} <br />
            Deaths Today: {props.totalNewDeathsToday} <br />
            New Cases Today: {props.totalNewCasesToday} <br />
            Active Cases: {props.totalActiveCases} <br />
            Serious Cases: {props.totalSeriousCases} <br />
        </div>
    );
}

export default ShowData;