import React from 'react';
import './ShowData.css';

const ShowData = props => {
    const json = props.countryNewsItems;
    let jsonArray = [];
    Object.keys(json).sort().reverse().forEach(function(key) {
        if(jsonArray.length < 15) {
            jsonArray.push(json[key])
        } else {
            return;
        }
    });
    jsonArray = jsonArray.reverse();
    return(
        <div className="container">
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