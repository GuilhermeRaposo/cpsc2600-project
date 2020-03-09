import React from 'react';
import Header from './Header';
import HeaderImage from './HeaderImage';
import Main from './Main';
import Footer from './Footer';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <>
                <Header />
                <HeaderImage />
                <Main />
                <Footer />
            </>
        );
    }
}
