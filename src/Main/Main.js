import React from 'react';
import About from './About';
import Locations from './Locations'
import Contact from './Contact';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <About />
                <Locations />
                <Contact />
            </main>
        );
    }
}