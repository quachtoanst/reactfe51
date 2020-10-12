import React, { Component } from "react";
import { connect } from "react-redux";
class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;

    return (
      <div className="card text-left">
        <img
          style={{ width: "100%", height: 300 }}
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt={sanPham.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
//hàm tạo ra 1 hàm xử lý để đưa giá trị lên redux
const mapStateToProps = (state) => {
  return {};
};
//hàm tạo ra 1 hàm xử lý để đưa giá trị lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      //từ sản phẩm đc click =>tạo ra sp giỏ hang
      let spGH = { ...sanPhamClick, soLuong: 1 };
      let action = {
        type: "THEM_GIO_HANG", //Thuộc tính bắt buộc
        spGH: spGH,
      };
      //dùng hàm dispatch mà redux cung cấp đưa action lên reducer
      dispatch(action);
    },
  };
};
//tham số 1 hàm connect là 1 hàm (callback): lấy giá trị từ reducer về
//tham số 2 hàm connect là 1 hàm (callbackfunction): đưa các giá trị lên reducer
export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux);