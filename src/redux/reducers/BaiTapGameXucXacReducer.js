//state của bài tập xúc xắc
const stateDefault = {
  banChon: "Tài",
  mangXucXac: [
    { so: 1, hinhAnh: "./img/xucxac/1.png" },
    { so: 1, hinhAnh: "./img/xucxac/1.png" },
    { so: 1, hinhAnh: "./img/xucxac/1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  console.log("action.type", action.type);
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.taiXiu;
      return { ...state };
    }
    case "RANDOM_XUC_XAC": {
      //Tạo ra 3 con xúc xắc ngẫu nhiên gắn lại cho mangXucXac
      let mangXucXacNgauNhien = [];

      for (let i = 0; i < 3; i++) {
        const soNgauNhien = Math.floor(Math.random() * 6) + 1;
        const xucXacNgauNhien = {
          so: soNgauNhien,
          hinhAnh: `./img/xucxac/${soNgauNhien}.png`,
        };
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
      let tongDiem = state.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
        return (tongDiemXX += xucXac.so);
      }, 0);
      if (
        (tongDiem > 9 && state.banChon === "Tài") ||
        (tongDiem <= 9 && state.banChon === "Xỉu")
      ) {
        state.soBanThang += 1;
      }
      state.tongSoBanChoi += 1;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default BaiTapGameXucXacReducer;
