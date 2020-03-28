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

    toggleColor() {
      console.log(window.pageYOffset);
        if (window.pageYOffset > 110) {
          this.setState({
            color: 'white'
          });
        }
        else {
          this.setState({
            color: 'black'
          });
        }
      }

    render() {
      const style = {color: this.state.color}
        return (
            <div id='backToTop' onClick={this.props.scrollToTop}>
                <img src={`images/top${this.state.color}.png`}></img>
                <h4 style={style}>Back to top</h4>
            </div>
        );
    }
}