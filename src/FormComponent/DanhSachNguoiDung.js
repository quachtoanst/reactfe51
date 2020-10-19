import React, { Component } from "react";
import FormComponent from "./FormComponent";

export default class DanhSachNguoiDung extends Component {
  render() {
    return (
      <div className="container">
        <FormComponent />
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Mã người dùng</th>
                <th scope="col">Tên người dùng</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
