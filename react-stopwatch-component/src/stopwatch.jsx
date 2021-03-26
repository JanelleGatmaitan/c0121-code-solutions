import React from 'react';
import ReactDOM from 'react-dom';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.buttonClass = this.buttonClass.bind(this);
  }

  buttonClass() {
    if (this.state.isPaused) {
      return 'fas fa-play';
    }
    return 'fas fa-pause';
  }

  handleClick() {
    this.setState({
      isPaused: !this.state.isPaused
    });
  }

  render() {
    const buttonClass = this.buttonClass();
    return (
      <>
        <div className="watch">
          <div className="seconds">
            0
          </div>
        </div>
        <i className={buttonClass} onClick={this.handleClick}></i>
      </>
    );
  }
}
