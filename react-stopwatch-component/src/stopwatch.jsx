import React from 'react';
import ReactDOM from 'react-dom';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: true,
      seconds: 0
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

  secondsElapsed() {
    return setInterval(() => {
      this.state.seconds++}
      , 1000);
  }

  handleClick() {
    this.setState({
      isPaused: !this.state.isPaused,
      seconds: this.state.seconds + 1
    });
  }

  render() {
    const buttonClass = this.buttonClass();
    const seconds = this.state.seconds;
    return (
      <>
        <div className="watch">
          <div className="seconds">
            {this.state.seconds}
          </div>
        </div>
        <i className={buttonClass} onClick={this.handleClick}></i>
      </>
    );
  }
}
