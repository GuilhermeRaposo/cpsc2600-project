import React from 'react';
import Header from './Header';
import Main from './Main/Main';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <ScrollToTop />
                <Main />
                <Footer />
            </>
        );
    }
}
