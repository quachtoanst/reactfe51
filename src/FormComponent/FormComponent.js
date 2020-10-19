import React, { Component } from "react";

import swal from "sweetalert2";

export default class FormComponent extends Component {
  state = {
    values: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
  };

  handleChangeInput = (event) => {
    //Lấy ra name và value
    let { name, value } = event.target;
    // Lấy ra attribute types (các thuộc tính rên thẻ tự thêm gọi là attribute)
    let types = event.target.getAttribute("types");

    let newValues = { ...this.state.values }; //Tao ra value moi gia tri = value cu
    newValues[name] = value;

    //Xử lý error

    let newErrors = { ...this.state.errors };

    newErrors[name] = value.trim() === "" ? "Không được bỏ trống" : "";

    //Validation trường đặc biệt

    switch (types) {
      case "phoneNumber":
        const regexNumber = /^\d+$/;
        if (!regexNumber.test(value.trim())) {
          newErrors[name] = "Điện thoại không hợp lệ";
        }
        break;
      case "email":
        // eslint-disable-next-line no-control-regex
        const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        if (!regexEmail.test(value.trim())) {
          newErrors[name] = "Email không hợp lệ!";
        }
        break;

      default:
        break;
    }

    // this.setState(
    //   {
    //     [name]: value,
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );
    this.setState(
      {
        values: newValues,
        errors: newErrors, //Gan value = value moi
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <form
        className="card"
        onSubmit={(event) => {
          event.preventDefault();
          let valid = true;

          // for in Duyet thuoc tinh tren object
          for (let tenThuocTinh in this.state.values) {
            if (this.state.values[tenThuocTinh].trim() === "") {
              valid = false;
            }
          }
          for (let tenThuocTinh in this.state.errors) {
            if (this.state.values[tenThuocTinh].trim() !== "") {
              valid = false;
            }
          }

          if (!valid) {
            swal.fire("Thông báo", "Dữ liệu không hợp lệ", "error");
            return;
          }
          swal.fire("Thông báo", "Thêm người dùng thành công", "success");
          console.log("submit");
        }}
      >
        <div className="card-header">THÔNG TIN NGƯỜI DÙNG</div>
        <div className="card-body">
          <div className="row">
            <div className="col col-6">
              <div className="form-group">
                <span>Mã người dùng</span>
                <input
                  className="form-control"
                  name="maNguoiDung"
                  value={this.state.values.maNguoiDung}
                  onChange={this.handleChangeInput}
                ></input>
                <div className="text-danger">
                  {this.state.errors.maNguoiDung}
                </div>
              </div>
              <div className="form-group">
                <span>Tên người dùng</span>
                <input
                  value={this.state.values.tenNguoiDung}
                  className="form-control"
                  name="tenNguoiDung"
                  onChange={this.handleChangeInput}
                ></input>
                <div className="text-danger">
                  {this.state.errors.tenNguoiDung}
                </div>
              </div>
            </div>
            <div className="col col-6">
              <div className="form-group">
                <span>Số điện thoại</span>
                <input
                  types="phoneNumber"
                  className="form-control"
                  value={this.state.values.soDienThoai}
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                ></input>
                <div className="text-danger">
                  {this.state.errors.soDienThoai}
                </div>
              </div>
              <div className="form-group">
                <span>Email</span>
                <input
                  types="email"
                  value={this.state.values.email}
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                ></input>
                <div className="text-danger">{this.state.errors.email}</div>
              </div>
            </div>
            <div className="col-12 text-right">
              <button className="btn btn-success">Thêm người dùng</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
