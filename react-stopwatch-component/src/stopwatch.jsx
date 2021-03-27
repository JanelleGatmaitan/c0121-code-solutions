import React from 'react';
import ReactDOM from 'react-dom';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: false,
      seconds: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.buttonClass = this.buttonClass.bind(this);
  }

  buttonClass() {
    if (this.state.isPaused) {
      return 'fas fa-pause';
    }
    return 'fas fa-play';
  }

  reset() {
    if (!this.state.isPaused) {
      this.setState({
        isPaused: this.state.isPaused,
        seconds: 0
      });
    }
  }

  handleClick() {
    if (!this.state.isPaused) {
      return this.startTimer();
    } else {
      return this.stopTimer();
    }
  }

  stopTimer() {
    clearInterval(this.state.timerId);
    this.setState({
      isPaused: false,
      seconds: this.state.seconds
    });
  }

  startTimer() {
    let timerId = setInterval(() => {
      this.setState({
        isPaused: true,
        seconds: this.state.seconds + 1,
        timerId: timerId
      });
    }, 1000);
  }

  render() {
    const buttonClass = this.buttonClass();
    return (
      <>
        <div className="watch" onClick={this.reset}>
          <div className="seconds">
            {this.state.seconds}
          </div>
        </div>
        <i className={buttonClass} onClick={this.handleClick}></i>
      </>
    );
  }
}
