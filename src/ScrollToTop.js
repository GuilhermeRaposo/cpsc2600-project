import React from 'react';

export default class ScrollToTop extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            color: 'black'
        }
    }

    componentDidMount() {
        document.addEventListener("scroll", (event) => {
            this.toggleColor();
          });
    }

    scrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
    }

    toggleColor() {
      if (window.pageYOffset < 110) {
        this.setState({
          color: 'black'
        });
      }
      else if (window.pageYOffset > 110 && window.pageYOffset < 1400) {
        this.setState({
          color: 'white'
        });
      }
      else if (window.pageYOffset > 1400 && window.pageYOffset < 2150) {
        this.setState({
          color: 'black'
        });
      }
      else {
        this.setState({
          color: 'white'
        });
      }
    }

    render() {
      const style = {color: this.state.color}
        return (
            <div id='backToTop' onClick={this.scrollToTop}>
                <img src={`images/top${this.state.color}.png`}></img>
                <h4 style={style}>Back to top</h4>
            </div>
        );
    }
}