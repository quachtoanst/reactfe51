import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    const { hoVaTen, lop } = this.props;
    return (
      <div>
        <h3>Class Props</h3>
        <p>Ten222: {hoVaTen}</p>
        <p>Lop2222: {lop}</p>
      </div>
    );
  }
}
