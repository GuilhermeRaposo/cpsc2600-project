import React from 'react';

export default class Header extends React.Component {
    
    scrollTo(yOffset) {
        window.scrollTo({
            top: yOffset,
            behavior: 'smooth'
        })
    }

    render() {
        return (
            <header>
                <nav>
                    <img src="/images/logo.png" className='logo'></img>
                    <ul>
                        <li onClick={() => this.scrollTo(1000)} className='link'>About</li>
                        <li onClick={() => this.scrollTo(1500)} className='link'>Services</li>
                        <li onClick={() => this.scrollTo(2200)} className='link'>Contact</li>
                        <li onClick={() => this.scrollTo(2800)} className='link'>Locations</li>
                    </ul>
                </nav>

                <div id="intro">
                    <h1>Gigabyte</h1>
                    <h2>PC Parts and Services</h2>
                    <p>
                        Personal computer retailer and service provider. Our products include everything IT related and we 
                        provide repair and cleaning services for one of the cheapest prices in the market and in multiple locations across Canada!
                    </p>
                    <button onClick={() => this.scrollTo(1000)}>SHOW ME MORE &nbsp; &#9658;</button>
                </div>
            </header>
        );
    }
}
