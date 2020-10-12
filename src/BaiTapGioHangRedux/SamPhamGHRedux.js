import React, { Component } from 'react'

export default class SanPhamGHRedux extends Component {
    
    render() {
        console.log("this props", this.props)
        return (
            <tr>
                <td>{this.props.spGioHang.maSP}</td>
                <td>{this.props.spGioHang.tenSP}</td>
                <td><img src={this.props.spGioHang.hinhAnh} alt=""/></td>
                <td>1</td>
                <td>{this.props.spGioHang.giaBan}</td>
                <td>1000</td>
                <td><button className="btn btn-danger">Xóa</button></td>
            </tr>
        )
    }
}