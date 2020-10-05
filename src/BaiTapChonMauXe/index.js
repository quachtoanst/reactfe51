import React, { Component } from "react";

/**
 * 1. Dan layout
 * 2. Xac dinh data thay doi va luu vao trong state
 * 3. Lay data trong state di binding ra jsx
 * 4. bat su kien click cho cac nut chon mau
 * 5. cap nhat lai gia tri trong state
 */

export default class BaiTapChonMauXe extends Component {
  state = {
    imgCar: "./img/car/products/red-car.jpg",
  };

  handleChangeColor = (imgSrc) => {
    this.setState({ imgCar: imgSrc });
  };

  render() {
    return (
      <section className="show-room">
        <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">
            <button
              onClick={() => {
                this.handleChangeColor("./img/car/products/black-car.jpg");
              }}
              className="btn"
            >
              <img
                src="./img/car/icons/icon-black.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              onClick={() => {
                this.handleChangeColor("./img/car/products/red-car.jpg");
              }}
              className="btn"
            >
              <img
                src="./img/car/icons/icon-red.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              onClick={() => {
                this.handleChangeColor("./img/car/products/silver-car.jpg");
              }}
              className="btn"
            >
              <img
                src="./img/car/icons/icon-silver.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              onClick={() => {
                this.handleChangeColor("./img/car/products/steel-car.jpg");
              }}
              className="btn"
            >
              <img
                src="./img/car/icons/icon-steel.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
          </div>
          <div className="car mt-2">
            <img className="img-thumbnail" src={this.state.imgCar} alt="hinh" />
          </div>
        </div>
      </section>
    );
  }
}
