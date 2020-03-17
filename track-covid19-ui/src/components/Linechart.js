import React, { Component } from 'react';
import axios from 'axios';


class Linechart extends Component {
    
    state = {
        data: []
    };

    componentDidMount() {
        axios.get('https://thevirustracker.com/free-api?countryTotal=IN').then(res => {
            const countryData = res.data.countrydata[0];
            this.setState({
                data: countryData.total_cases
            });
            console.log(countryData);
        });
    }

    render() {
        return(
        <div>{this.state.data}</div>
        )
    };
}

export default Linechart;