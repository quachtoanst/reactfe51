/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class Databinding extends Component {
	//Thuoc tinh cua lop doi tuong => Su dung duoc nhieu phuong thuc trong lop doi tuong

	hocVien = {
		ma:1,
		avatar: 'https://picsum.photos/200/200',
		tenHocVien: 'Nguyen Van Teo'
	}

	// Phuong thuc => phuong thuc co the goi trong phuong thuc khac cua lop doi tuong

	renderHocVien = () =>{
		return (
      <div className="card border-primary">
        <img className="card-img-top" src={this.hocVien.avatar} alt />
        <div className="card-body">
          <h4 className="card-title">{this.hocVien.tenHocVien}</h4>
          <p className="card-text">{this.hocVien.ma}</p>
        </div>
      </div>
    );

	}



	render() {

		// binding data la bien
		let title = 'CyberSoft';
		let imgScr = 'https://picsum.photos/200/200';

		//Binding data la ham
		const renderImg = () => {
				//Gia tri muon render ra giao dien phai tra ve chuoi , so, hoac jsx
				return (
          <div className="card-group">
            <div className="card">
              <img
                className="card-img-top"
                src={imgScr}
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
              </div>
            </div>
          </div>
        );
		}



		return (
			<div className="container">
					<div id="title">
						{title}
					</div>
					<div className="w-25">
						<img src={imgScr}/>
					</div>
					<div className="w-50 	form-control" value={title}>
								Databinding
					</div>
					<div className="w-50 	form-control" value={renderImg()}>
								Databinding
					</div>
					<div>
						{renderImg()}
					</div>
					<h1>Thong tin hoc vien</h1> 
					<ul>
						<li>Ma hoc vien: {this.hocVien.ma}</li>
						<li>Ten hoc vien: {this.hocVien.tenHocVien}</li>
						<li>Hinhanh: <img scr={this.hocVien.avatar}  width="200" height="200"/></li>
					</ul>
					{this.renderHocVien()}
			</div>
		)
	}
}
