import React, { Component } from 'react';
import Ball from './Ball';

class Lottery extends Component {
  //Default props
  static defaultProps={
    title: "Lotto",
    maxBalls: 6,
    maxNum: 45
  }
  //state
  constructor(props){
    super(props);
    //create an array of length 6
    this.state={nums: Array.from({length: this.props.maxBalls})};
    this.handleClick = this.handleClick.bind(this);
  }

  generate(){
    this.setState(curState => ({
      nums: curState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  } 
  
  handleClick(){
    //parse the generate function
    this.generate();
  }

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => <Ball num={n}/>)}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    )
  }
}

export default Lottery
