import React, { PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render child");
    return (
      <div>
        <h3>Child number: {this.props.number}</h3>
        Component Child
      </div>
    );
  }
}
