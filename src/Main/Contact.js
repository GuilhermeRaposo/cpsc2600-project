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
                    <h3>TEXT HERE?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores vel natus magni beatae. Maxime, officia quibusdam quae dignissimos exercitationem beatae doloribus ut totam enim amet molestiae deleniti aliquid quisquam.
                    </p>
                    <h3>TEXT HERE?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores vel natus magni beatae. Maxime, officia quibusdam quae dignissimos exercitationem beatae doloribus ut totam enim amet molestiae deleniti aliquid quisquam.
                    </p>
                    <h3>TEXT HERE?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores vel natus magni beatae. Maxime, officia quibusdam quae dignissimos exercitationem beatae doloribus ut totam enim amet molestiae deleniti aliquid quisquam.
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