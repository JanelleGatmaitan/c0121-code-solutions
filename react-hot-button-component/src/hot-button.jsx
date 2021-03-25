import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    const timesClicked = this.state.timesClicked;
    let className;
    if (timesClicked >= 3 && timesClicked < 6) {
      className = 'darkpurple';
    } else if (timesClicked >= 6 && timesClicked < 9) {
      className = 'lightpurple';
    } else if (timesClicked >= 9 && timesClicked < 12) {
      className = 'red';
    } else if (timesClicked >= 12 && timesClicked < 15) {
      className = 'orange';
    } else if (timesClicked >= 15 && timesClicked < 18) {
      className = 'yellow';
    } else if (timesClicked >= 18) {
      className = 'white';
    }
    return <button class={className} onClick={this.handleClick}>Hot Button</button>;
  }
}
