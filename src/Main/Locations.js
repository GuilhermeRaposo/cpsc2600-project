import React from 'react';
import Axios from 'axios';

export default class Locations extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            locations: []
        }
    }

    componentDidMount() {
        Axios.get('/locations')
        .then((results) => {
            this.setState({
                locations: results.data
            });
            console.log(this.state.locations)
        })
        .catch((error) => console.log(error));
    }

    render() {
        return (
            <div id="locations">
                <h2>Locations</h2>
                {this.state.locations.map((location) => <ul>
                    <li key={location.city}><img src='images/pin.png'></img>{`${location.address}, ${location.city}, ${location.province}, ${location.postalCode}`}</li>
                    <li key={location.tel}><img src=''></img>{location.tel}</li>
                </ul>)}
            </div>
        );
    }
}