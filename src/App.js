import React from 'react';
import Header from './Header';
import Main from './Main/Main';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SubmitStatus from './SubmitStatus';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitSuccessVisible: false,
            submitFailedVisible: false
        }

        this.submitSuccessful = this.submitSuccessful.bind(this);
        this.submitFailed = this.submitFailed.bind(this);
    }

    submitSuccessful() {
        this.setState({
            submitSuccessVisible: true
        });

        setTimeout(() => {
            this.setState({
                submitSuccessVisible: false
            })
        }, 3000);
    }

    submitFailed() {
        this.setState({
            submitFailedVisible: true
        });

        setTimeout(() => {
            this.setState({
                submitFailedVisible: false
            })
        }, 3000);
    }

    render() {
        return (
            <>
                <SubmitStatus submitSuccessVisible={this.state.submitSuccessVisible} submitFailedVisible={this.state.submitFailedVisible}/>
                <Header />
                <ScrollToTop />
                <Main submitSuccessful={this.submitSuccessful} submitFailed={this.submitFailed} />
                <Footer />
            </>
        );
    }
}
