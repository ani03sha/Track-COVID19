import React from 'react';
import './Table.css'

const Table = props => {

    // Object destructuring
    const { 
        countryName, 
        totalCases, 
        totalRecovered, 
        totalUnResolved, 
        totalDeaths, 
        totalNewDeathsToday, 
        totalNewCasesToday, 
        totalActiveCases, 
        totalSeriousCases
    } = props;

    return(
        <div className="table-responsive">
                <table className = "table table-hover table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Country</th>
                            <th scope="col">Total Cases</th>
                            <th scope="col">Recovered</th>
                            <th scope="col">Unresolved</th>
                            <th scope="col">Deaths</th>
                            <th scope="col">Deaths Today</th>
                            <th scope="col">New Cases Today</th>
                            <th scope="col">Active Cases</th>
                            <th scope="col">Serious Cases</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{countryName}</td>
                            <td>{totalCases}</td>
                            <td>{totalRecovered}</td>
                            <td>{totalUnResolved}</td>
                            <td>{totalDeaths}</td>
                            <td>{totalNewDeathsToday}</td>
                            <td>{totalNewCasesToday}</td>
                            <td>{totalActiveCases}</td>
                            <td>{totalSeriousCases}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    );
}

export default Table;