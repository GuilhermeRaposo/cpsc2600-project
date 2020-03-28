import React from 'react';

export default class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id='contact'>
                <h2>Contact</h2>

                <form method="post" action="/location">
                    <label>
                        City
                        <input type='text' name='city' id='city'></input>
                    </label>
                    <label>
                        Province
                        <input type='text' name='province' id='province'></input>
                    </label>
                    <label>
                        Address
                        <input type='text' name='address' id='address'></input>
                    </label>
                    <label>
                        Tel
                        <input type='text' name='tel' id='tel'></input>
                    </label>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}