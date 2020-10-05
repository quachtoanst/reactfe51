import React, { Component } from "react";

export default class DemoListAndKey extends Component {
  danhSachKhoaHoc = ["NoteJs", "ReactJs", "VueJs"];

  renderDanhSachKhoaHoc = () =>
    this.danhSachKhoaHoc.map((khoaHoc, index) => <li>{khoaHoc}</li>);

  render() {
    return (
      <div>
        <h2>List And Keys</h2>
        <h3>Danh sach Khoa hoc</h3>
        <ul>{this.renderDanhSachKhoaHoc()}</ul>
      </div>
    );
  }
}
