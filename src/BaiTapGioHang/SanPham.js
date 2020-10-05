import React, { Component } from "react";
/* cSpell:disable */
export default class SanPham extends Component {
  handleDeTail = () => {
    const { xuLyChiTiet } = this.props;
    xuLyChiTiet(this.props.sanPham);
  };
  render() {
    console.log("sp", this.props);
    const { sanPham } = this.props;
    // console.log("SanPham.js", sanPham);
    return (
      <div className="card">
        <img className="card-img-top" src={sanPham.hinhAnh} alt="Anh dep" />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <button className="btn btn-success" onClick={this.handleDeTail}>
            Chi tiết
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.handleCardList(sanPham);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
