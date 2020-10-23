import React, { Component } from "react";
import { connect } from "react-redux";
import {
  xoaNguoiDungAction,
  suaNguoiDungAction,
} from "../redux/actions/QuanLyNguoiDungAction";
import NewFormComponent from "./NewFormComponent";

class DanhSachNguoiDung extends Component {
  renderNguoiDung = () => {
    return this.props.mangNguoiDung.map((nguoiDung, index) => {
      return (
        <tr key={index}>
          <td>{nguoiDung.maNguoiDung}</td>
          <td>{nguoiDung.tenNguoiDung}</td>
          <td>{nguoiDung.soDienThoai}</td>
          <td>{nguoiDung.email}</td>
          <td>
            <button
              className="btn btn-warning"
              onClick={() => {
                //Gọi hàm trong mapDispathToProps
                //Hàm này khi sử dụng connect với redux so tu co props này
                // let action = {
                //   type: "XOA_NGUOI_DUNG",
                //   mangNguoiDung: nguoiDung.maNguoiDung,
                // };
                // this.props.dispatch(action);
                this.props.dispatch(suaNguoiDungAction(nguoiDung));
              }}
            >
              Sửa
            </button>
            <button
              className="btn btn-warning"
              onClick={() => {
                //Gọi hàm trong mapDispathToProps
                //Hàm này khi sử dụng connect với redux so tu co props này
                // let action = {
                //   type: "XOA_NGUOI_DUNG",
                //   mangNguoiDung: nguoiDung.maNguoiDung,
                // };
                // this.props.dispatch(action);
                this.props.dispatch(xoaNguoiDungAction(nguoiDung.maNguoiDung));
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <NewFormComponent />
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Mã người dùng</th>
                <th>Tên người dùng</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.renderNguoiDung()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangNguoiDung: state.QuanLyNguoiDungReducer.mangNguoiDung,
  };
};

export default connect(mapStateToProps)(DanhSachNguoiDung);
