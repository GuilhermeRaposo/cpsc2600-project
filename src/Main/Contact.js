import React from 'react';

export default class Footer extends React.Component {
    constructor(props){
        super(props);
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

                        <form method="post" action="/contact">
                                <input type='text' name='name' id='name' placeholder='Name'></input>
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