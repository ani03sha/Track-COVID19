import React from 'react';
import './ShowData.css';
import { Link } from 'react-router-dom';

const ShowData = (props) => {
    const json = props.countryNewsItems;
    let jsonArray = [];
    Object.keys(json).forEach(function(key) {
        if(jsonArray.length < 10) {
            jsonArray.push(json[key])
        } else {
            return;
        }
    });
    return(
        <div>
            <div class="table-responsive">
                <table class = "table table-hover table-bordered table-striped">
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
            <div className="row">
                { jsonArray.map((item) => {
                    return(
                        <div className="col-md-4" style={{ marginBottom: "2rem" }}>
                            <div className="card">
                                <img className="articleList__image" src={item.image} alt={item.title} />
                                <p className="articleList__title">{item.title}</p>
                                <p className="articleList__time">{item.time}</p>
                                <a href={item.url} target="_blank"><button>Read More..</button></a>
                            </div>
                            
                        </div>
                        );
                    })
                }           
            </div>
        </div>
    );
}

export default ShowData;


/**
 * <div className="article__details">                            
                                <a href={item.url} target="_blank">
                                    {item.title}
                                </a>
                            </div>
 */