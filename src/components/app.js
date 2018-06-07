import React, { Component } from 'react';

import Input from './fizzbuzz';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state={
      fizzOrBuzz: ""
    }
  }

  fizzBuzzCheck(value){
    if(value % 3 == 0 && value % 5 == 0){
      this.setState({
        fizzOrBuzz: "FizzBuzz"
      });
    }else if(value % 3 == 0){
      this.setState({
        fizzOrBuzz: "Fizz"
      });
    }else if(value % 5 == 0){
      this.setState({
        fizzOrBuzz: "Buzz"
      });
    }else{
      this.setState({
        fizzOrBuzz: value
      });
    }
  }

  render() {
    return (
      <div>
        <Input fizzBuzzCheck={value => this.fizzBuzzCheck(value)}/>
        <p>{this.state.fizzOrBuzz}</p>
      </div>
    );
  }
}
