import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <header>
                <a href="/"><img src="/images/logo.jpg"></img></a>
                <div id="links">
                    <a href="/about" className="link"> About </a>
                    <a href="/locations" className="link"> Locations </a>
                    <a href="/contact" className="link"> Contact </a>
                </div>
            </header>
        );
    }
}
