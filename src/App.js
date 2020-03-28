import React from 'react';
import Header from './Header';
import Main from './Main/Main';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
        console.log('teste');
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <>
                <Header scrollToTop={this.scrollToTop} />
                <ScrollToTop scrollToTop={this.scrollToTop} />
                <Main />
                <Footer />
            </>
        );
    }
}
