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
        <div className="container">
            Country: {props.countryName} <br />
            Total Cases: {props.totalCases} <br />
            Recovered: {props.totalRecovered} <br />
            Unresolved: {props.totalUnResolved} <br />
            Deaths: {props.totalDeaths} <br />
            Deaths Today: {props.totalNewDeathsToday} <br />
            New Cases Today: {props.totalNewCasesToday} <br />
            Active Cases: {props.totalActiveCases} <br />
            Serious Cases: {props.totalSeriousCases} <br />
            <div className="row">
                { jsonArray.map((item) => {
                    return(
                        <div className="col-md-4" style={{ marginBottom: "2rem" }}>
                            <div className="articleList__container">
                                <img className="articleList__image" src={item.image} alt={item.title} />
                            </div>
                            <div className="article__details">                            
                                <h5 className="article__title">
                                    {item.title}
                                </h5>
                                <Link  to={{
                                    pathname: `/article/${item.newsid}`,
                                    state: { item }
                                }}>
                                    <button>Read More...</button>
                                </Link>
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