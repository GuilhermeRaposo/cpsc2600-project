import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <header>
                <nav>
                    <img onClick={this.props.scrollToTop} src="/images/logo.png" className='logo'></img>
                    <ul>
                        <li className='link'>Services</li>
                        <li className='link'>Products</li>
                        <li className='link'>About</li>
                        <li className='link'>Location</li>
                        <li className='link'>Contact</li>
                    </ul>
                </nav>

                <div id="intro">
                    <h1>Gigabyte</h1>
                    <h2>PC Parts and Services</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ab eveniet, aliquid harum ipsam dicta, corrupti vero saepe aut facere exercitationem velit a omnis! Dicta, quas suscipit! Blanditiis, accusantium quae?
                    </p>
                    <button>SHOW ME MORE &nbsp; &#9658;</button>
                </div>
            </header>
        );
    }
}
