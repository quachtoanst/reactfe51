import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };
    console.log("constructor");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    //Goi API tai Did Mount
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    //Ham nay chay khi setState hoac thay doi props
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>LifeCycle Numer: {this.state.number}</h1>
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          +
        </button>
        <ChildComponent number={this.state.number} />
      </div>
    );
  }
}
