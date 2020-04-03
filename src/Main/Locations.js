import React from 'react';

export default class Locations extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="locations">
                <h2>Locations</h2>
                {this.props.locations.map((location) => <ul key={location.postalCode} className='location'>
                    <li className='address' key={location.postalCode}><img src='images/pin.png' className='pin'></img>{`${location.address}, ${location.city}, ${location.province}, ${location.postalCode}`}</li>
                    <li key={location.tel}><img src='images/tel.png' className='tel'></img>{location.tel}</li>
                </ul>)}
            </div>
        );
    }
}