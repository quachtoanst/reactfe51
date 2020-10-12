/* cSpell:disable */
import React, { Component } from "react";
import DanhSachSanPham from "./data.json";
import Model from "./Model";
import SanPham from "./SanPham";

export default class BaiTapGioHang extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    cardList: [],
  };

  handleCardList = (sanPham) => {
    // tim vi tri
    const index = this.state.cardList.findIndex(
      (card) => card.maSP === sanPham.maSP
    );
    let cardList = [...this.state.cardList];
    if (index !== -1) {
      // tim thay => tang so luong
      cardList[index].soLuong += 1;
    } else {
      //Khong tim thay => them vao mang
      const newCard = { ...sanPham, soLuong: 1 };
      cardList = [...cardList, newCard];
    }

    this.setState({
      cardList,
    });
  };

  handleSanPhamChiTiet = (sanPhamChiTiet) => {
    this.setState({
      sanPhamChiTiet, //sanPhamChiTiet: sanPhamChiTiet
    });
  };
  renderDanhSachSanPham = () => {
    return DanhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <SanPham
            sanPham={sanPham}
            xuLyChiTiet={this.handleSanPhamChiTiet}
            handleCardList={this.handleCardList}
          />
        </div>
      );
    });
  };

  tangGiamSoLuong = (maSP, tangGiam) => {
    //tim ra san pha bam nut + /-
    console.log("maSP", maSP);
    console.log("tangGiam", tangGiam);
    let gioHangUpdate = [...this.state.cardList];
    // tim san pham trong gio hang;

    let spGH = gioHangUpdate.find((sp) => sp.maSP === maSP);

    if (spGH) {
      //tim ra san pham !undefinde
      if (tangGiam) {
        spGH.soLuong += 1;
      } else {
        if (spGH.soLuong > 1) {
          spGH.soLuong -= 1;
        }
      }
    }
    this.setState({
      cardList: gioHangUpdate,
    });
  };

  render() {
    return (
      <div>
        <section className="container">
          <h3 className="title text-center">Bài tập giỏ hàng</h3>
          <div className="container text-center my-2">
            <button
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#modelId"
            >
              So luong: ({this.state.cardList.soLuong})
            </button>
          </div>
          <div className="container danh-sach-san-pham">
            <div className="row">{this.renderDanhSachSanPham()}</div>
          </div>
          <Model
            cardList={this.state.cardList}
            tangGiamSoLuong={this.tangGiamSoLuong}
          />
          <div className="row">
            <div className="col-sm-5">
              <img
                className="img-fluid"
                src={this.state.sanPhamChiTiet.hinhAnh}
                alt=""
              />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Man hinh</td>
                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
                  </tr>
                  <tr>
                    <td>He dieu hanh</td>
                    <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{this.state.sanPhamChiTiet.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{this.state.sanPhamChiTiet.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
