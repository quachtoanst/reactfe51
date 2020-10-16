import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachXucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((item, i) => {
      return (
        <img
          alt=""
          key={i}
          className="m-5"
          src={item.hinhAnh}
          style={{ width: 50 }}
        ></img>
      );
    });
  };
  render() {
    return (
      <div className=" row mt-5 text-center">
        <div className="col-3">
          <button
            className="pt-5 btn btn-success"
            onClick={() => {
              this.props.datCuoc("Tài");
            }}
          >
            <span className="display-4">TÀI</span>
          </button>
        </div>
        <div className="col-6">{this.renderXucXac()}</div>
        <div className="col-3">
          <button
            className="pt-5 btn btn-danger"
            onClick={() => {
              this.props.datCuoc("Xỉu");
            }}
          >
            <span className="display-4">XỈU</span>
          </button>
        </div>
      </div>
    );
  }
}

//Dinh nghia ham lay du lieu state tu redux store ve component

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
  };
};

const mapDispatchtoProps = (dispatch) => {
  // dispath la phương thức đưa dữ liệu state lên store
  return {
    datCuoc: (taiXiu) => {
      console.log(taiXiu);
      //Tạo action
      const action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(DanhSachXucXac);
