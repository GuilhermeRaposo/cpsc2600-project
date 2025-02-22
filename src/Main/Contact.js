import React from 'react';
import Axios from 'axios';

export default class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();

        Axios.post('/api/contact', {
            name: document.getElementById('nameContact').value,
            email: document.getElementById('email').value,
            msg: document.getElementById('msg').value
        })
        .then(results => {
            this.props.submitSuccessful();
        })
        .catch(error=>{
            this.props.submitFailed();
            console.log(error);
          });
    }

    render() {
        return (
            <div id='contact'>
                <div id="contact-inner">
                    <div id="contact-text">
                    <h3>WE ARE READY TO HELP</h3>
                    <p>
                        You can leave us a message using the form on the right. 
                        We have a great team that usually respond in less than an hour. 
                        Alternatively you can directly send us an email at contact@gygabite.com,
                        or contact us on our social media profiles.
                    </p>
                    <h3>FOLLOW US ON SOCIAL MEDIA</h3>
                    <p>
                        You can follow us on Facebook, Twitter or Instagram to get the latest updates
                        on our store, such as seasonal sales, new items, new locations and the hiring events that we often do.
                    </p>
                    </div>

                    <div id='contact-form'>
                        <h2>CONTACT US NOW:</h2>

                        <form onSubmit={(e) => this.handleSubmit(e)}>
                                <input type='text' name='name' id='nameContact' placeholder='Name'></input>
                                <input type='text' name='email' id='email' placeholder='Email'></input>
                                <textarea name='msg' id='msg' placeholder='Message'></textarea>
                                <button type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}