import React, { Component } from "react";
import { connect } from "react-redux";
// import SanPhamGHRedux from "./SamPhamGHRedux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang, index) => {
      return (
        <tr>
          <td>{spGioHang.maSP}</td>
          <td>{spGioHang.tenSP}</td>
          <td>
            <img src={spGioHang.hinhAnh} width={30} height={30} alt=""/>
          </td>
          <td>{spGioHang.soLuong}</td>
          <td>{spGioHang.giaBan}</td>
          <td>{spGioHang.soLuong*spGioHang.giaBan}</td>
          <td>
            <button className="btn btn-danger" onClick={()=>{
                this.props.xoaGioHang(spGioHang.maSP)
            }}>Xóa</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.renderGioHang()}</tbody>
      </table>
    );
  }
}

//lay state tu ruedux store bien thanh pros cua component
//Tham so state: dai dien cho root reducer
//gioHangComponent
const mapSateToProps = (rootReducer) => {
  return {
    gioHang: rootReducer.StateBaiTapGioHang.gioHang,
  };
};


const mapDispatchToProps = (dispatch) =>{
  return {
    xoaGioHang: (maSPClick) =>{
      console.log("maSPClick", maSPClick);
      const action = {
        type: 'XOA_GIO_HANG',
        maSPClick
        
      }
      dispatch(action);
    },
    tangGiamSoLuong : (maSP, tangGiam) =>{
      const action = {
        type: 'TANG_GIAM',
        tangGiam,
        maSP
      }
      dispatch(action)
    }
  }
}

export default connect(mapSateToProps,mapDispatchToProps)(GioHangRedux);
