import React, { Component } from "react";

export default class CardItem extends Component {
  render() {
    const { maSP, tenSP, hinhAnh, soLuong, giaBan } = this.props.card;
    return (
      <tr className="card-item">
        <td>{maSP}</td>
        <td>{tenSP}</td>
        <td>
          <img src={hinhAnh} width={50} alt="" />
        </td>
        <td>
          <button>-</button>2<button>+</button>
        </td>
        <td>{soLuong}</td>
        <td>{giaBan}</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
