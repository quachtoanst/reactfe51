//FIle khia bao tat cac cac state cua ung dung
import { combineReducers } from "redux";

import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import BaiTapGameXucXacReducer from "./BaiTapGameXucXacReducer";

//state tong cua ung dung

export const rootReducer = combineReducers({
  //Noi khai bao cac state theo tung nghiep vu
  StateBaiTapGioHang: BaiTapGioHangReducer,
  stateBaiTapGameXucXac: BaiTapGameXucXacReducer,
});
