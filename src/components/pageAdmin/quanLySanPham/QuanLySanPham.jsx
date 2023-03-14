import style from "./QuanLySanPham.module.scss";
import classNames from "classnames/bind";

import { Route, Routes, Link } from "react-router-dom";

import ChiTietHoaDon from "./sanPham/ChiTietSanPham";
import Hang from "./sanPham/Hang";
import HoaDonBanHang from "./sanPham/HoaDonBanHang";
import LoaiHang from "./sanPham/LoaiHang";

const cx = classNames.bind(style);

function QuanLySanPham() {
  return (
    <div className={cx("container")}>
      Quản lý sản phẩm
      <Routes>
        <Route path="/chitiethoadon" element={<ChiTietHoaDon />} />
        <Route path="/hang" element={<Hang />} />
        <Route path="/hoadonbanhang" element={<HoaDonBanHang />} />
        <Route path="/loaihang" element={<LoaiHang />} />
      </Routes>
    </div>
  );
}

export default QuanLySanPham;
