import React, { Component } from 'react';
import '../Styles/Ball.css';

class Ball extends Component {
  render() {
    return (
      <div className="Ball">
        {this.props.num}
      </div>
    )
  }
}

export default Ball
