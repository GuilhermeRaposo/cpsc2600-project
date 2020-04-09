import React from 'react';
import Axios from 'axios';

export default class Services extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            minYear: 2020,
            minMonth: 1,
            minDays: 1,
            maxDays: 31,

            name: ''
        }
    }

    componentDidMount() {
        let date = new Date();

        this.setState({
            minYear: date.getFullYear(),
            minMonth: date.getMonth() + 1,
            minDays: date.getDate()
        })
    }

    updateDays(e) {
        switch (e.target.value) {
            case '1': case '3': case '5': case '7': case '8': case '10': case '12':
                this.setState({
                    maxDays: 31
                });
                break;

            case '4': case '6': case '9': case '11':
                this.setState({
                    maxDays: 30
                });
                break;

            case '2': 
                this.setState({
                    maxDays: 28
                });
                break;
        }
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const year = document.getElementById('year').value;
        const month = document.getElementById('month').value;
        const day = document.getElementById('day').value;

        Axios.post('/api/appointments', {
            name: this.state.name,
            date: `${year}-${month}-${day}`,
            location: document.getElementById('locationSelect').value,
            type: document.getElementById('typeOfService').value
          })
          .then(results => {
              this.props.submitSuccessful();
          })
          .catch(error=>{
              this.props.submitFailed();
              console.log(error)
            })
    }

    render() {
        return (
            <div id="services">
                <h2>SCHEDULE AN APPOINTMENT!</h2>

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div id="nameDiv">
                        <label htmlFor='name'>
                            Name:    
                        </label>
                        <input type='text' name='name' id='name' onChange={(e) => this.handleNameChange(e)}></input>
                    </div>

                    <div id="dateDiv">
                        <label htmlFor='year'>Date: </label>
                        <input id='year' type="number" min={this.state.minYear} max={this.state.minYear + 1} />
                        <input id='month' type="number" min={this.state.minMonth} max='12' onChange={(e) => this.updateDays(e)} />
                        <input id='day' type="number" min={this.state.minDays} max={this.state.maxDays} />
                    </div>

                    <div id="locationDiv">
                        <label htmlFor='locationSelect'>Location:</label>
                        <select name='locationSelect"=' id='locationSelect'>
                            {this.props.locations.map((location) => {
                                return <option key={location.postalCode} value={location.postalCode}>{`${location.address}, ${location.city} , ${location.province}, ${location.postalCode}`}</option>
                            })}
                        </select>
                    </div>

                    <div id="typeDiv">
                        <label htmlFor='type'>Type: </label>
                        <select id='typeOfService'>
                            <option value='repair'>Repair</option>
                            <option value='cleaning'>Cleaning</option>
                        </select>
                    </div>

                    <div id="submitDiv">
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        );
    }
}