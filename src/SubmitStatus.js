import React from 'react';

export default class SubmitStatus extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById('submitSucess').style.display = 'none';
        document.getElementById('submitFailed').style.display = 'none';
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps != this.props) {
            if (this.props.submitSuccessVisible) {
                document.getElementById('submitSucess').style.display = 'block';
            }
            else {
                document.getElementById('submitSucess').style.display = 'none';
            }

            if (this.props.submitFailedVisible) {
                document.getElementById('submitFailed').style.display = 'block';
            }
            else {
                document.getElementById('submitFailed').style.display = 'none';
            }
        }
    }

    render() {
        return (
            <>
                <div id="submitSucess">
                    Sucess!
                </div>
                
                <div id="submitFailed">
                    Error!
                </div>
            </>
        );
    }
}