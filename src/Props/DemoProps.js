import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ten: "Nguyen Phong Hao",
      lop: "FE51",
    };
  }

  render() {
    return (
      <div>
        <h2>Props</h2>
        {/* Cach truyen Props trong reactjs */}
        <FunctionProps hoVaTen={this.state.ten} lop={this.state.lop} />

        <ClassProps hoVaTen={this.state.ten} lop={this.state.lop} />
      </div>
    );
  }
}
