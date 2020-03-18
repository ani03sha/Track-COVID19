import React from 'react';
import './Table.css'

const Table = (props) => {
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
                            <td>{props.countryName}</td>
                            <td>{props.totalCases}</td>
                            <td>{props.totalRecovered}</td>
                            <td>{props.totalUnResolved}</td>
                            <td>{props.totalDeaths}</td>
                            <td>{props.totalNewDeathsToday}</td>
                            <td>{props.totalNewCasesToday}</td>
                            <td>{props.totalActiveCases}</td>
                            <td>{props.totalSeriousCases}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    );
}

export default Table;