import {
  SUA_NGUOI_DUNG,
  XOA_NGUOI_DUNG,
} from "../constants/QuanLyNguoiDungConst";

const stateDefault = {
  mangNguoiDung: [
    {
      maNguoiDung: 1,
      tenNguoiDung: "Nguyễn Văn A",
      soDienThoai: "09090909",
      email: "nguyenvana@gmail.com",
    },
    {
      maNguoiDung: 2,
      tenNguoiDung: "Trần Văn Tèo",
      soDienThoai: "09090909",
      email: "tranvanteo@gmail.com",
    },
  ],
  nguoiDungChinhSua: {
    maNguoiDung: 1,
    tenNguoiDung: "Nguyễn Văn A",
    soDienThoai: "09090909",
    email: "nguyenvana@gmail.com",
  },
  stateForm: {
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
    maNguoiDungXoa: "",
  },
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  console.log("action: ", action.type);
  switch (action.type) {
    case XOA_NGUOI_DUNG:
      let mangNguoiDungCapNhat = [...state.mangNguoiDung];
      mangNguoiDungCapNhat = mangNguoiDungCapNhat.filter(
        (nd) => nd.maNguoiDung !== action.maNguoiDung
      );
      state.mangNguoiDung = mangNguoiDungCapNhat;
      return { ...state };
    case SUA_NGUOI_DUNG:
      let nguoiDungDuocClick = { ...action.nguoiDungChinhSua };
      //Cập nhật state người dùng chỉnh sửa = người dùng dược click
      state.nguoiDungChinhSua = nguoiDungDuocClick;
      return { ...state };
    default:
      return { ...state };
  }
};
