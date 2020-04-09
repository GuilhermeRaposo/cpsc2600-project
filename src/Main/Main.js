import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Locations from './Locations'

import Axios from 'axios';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locations: []
        }
    }

    componentDidMount() {
        Axios.get('/api/locations')
        .then((results) => {
            this.setState({
                locations: results.data
            });
        })
        .catch((error) => console.log(error));
    }

    render() {
        return (
            <main>
                <About />
                <Services locations={this.state.locations} submitSuccessful={this.props.submitSuccessful} submitFailed={this.props.submitFailed}/>
                <Contact submitSuccessful={this.props.submitSuccessful} submitFailed={this.props.submitFailed}/>
                <Locations locations={this.state.locations}/>
            </main>
        );
    }
}