import React, { Component } from "react";

export default class CardItem extends Component {
  render() {
    const { card, tangGiamSoLuong } = this.props;
    return (
      <tr className="card-item">
        <td>{card.maSP}</td>
        <td>{card.tenSP}</td>
        <td>
          <img src={card.hinhAnh} width={50} alt="" />
        </td>
        <td>
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                tangGiamSoLuong(card.maSP, false);
              }}
            >
              -
            </button>
            {/* <input type="text" className="form-control"> */}
            {card.soLuong}
            {/* </input> */}
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                tangGiamSoLuong(card.maSP, true);
              }}
            >
              +
            </button>
          </div>
        </td>
        <td>{card.giaBan}</td>
        <td>{card.giaBan * card.soLuong}</td>
        <td>
          <button className="btn btn-danger" xuLyNutDelCard>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
