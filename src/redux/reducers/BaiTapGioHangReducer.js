//Gia tri ban dau cua state

//1 reducer giong nhu 1 state
const stateDefault = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone",
      hinhAnh: "https://picsum.photos/50",
      soLuong: 1,
      giaBan: 1000,
    },
  ],
};

//Ham renducer tra ve state cua ung dung
//gioHangReducer
//Hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      //xử lý cập nhật lại state
      let gioHangUpdate = [...state.gioHang];
      //tìm sp có trong giỏ hàng hay không
      const index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.spGH.maSP
      );

      if (index !== -1) {
        gioHangUpdate[index].soLuong += 1;
      } else {
        gioHangUpdate.push({
          ...action.spGH,
          soLuong: 1,
        });
      }
      //gán lại state cũ =gt mới
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangUpdate = [...state.gioHang];
      const index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.maSPClick
      );
      if (index !== -1) {
        gioHangUpdate.splice(index, 1);
      }
      //cập nhật lại state.giohang
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "TANG_GIAM" :{
      let gioHangUpdate = [...state.gioHang];
      const spGioHang = gioHangUpdate.find(spGH => 
          spGH.maSP === action.maSP
      );

      if(spGioHang){
        if(action.tangGiam){
          spGioHang.soLuong +=1;
        }else{
          if(spGioHang.soLuong >1){
            spGioHang.soLuong -=1;
          }
        }
      }
      state.gioHang = gioHangUpdate;
      return {...state};

    }
    default:
    return {...state}
  }
};

export default BaiTapGioHangReducer;
