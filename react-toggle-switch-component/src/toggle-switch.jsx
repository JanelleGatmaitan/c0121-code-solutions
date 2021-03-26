import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isToggled: !this.state.isToggled});
  }
  render() {
    if (this.state.isToggled) {
      return (
        <div className="backgroundOn" onClick={this.handleClick}>
          <div className="switch on"> </div>
          <span className="dialog">ON</span>
        </div>
      );
    }
    return (
      <div className="background" onClick={this.handleClick}>
        <div className="switch"> </div>
        <span className="dialog">OFF</span>
     </div>
    );
  }
}
