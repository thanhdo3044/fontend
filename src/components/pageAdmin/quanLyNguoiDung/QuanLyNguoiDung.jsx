import style from "./QuanLyNguoiDung.module.scss";
import classNames from "classnames/bind";

import { Table } from "antd";
import { useState } from "react";

const data = [
  {
    key: "1",
    TenHang: "John Brown",
    SoLuong: 98,
    DonGiaBan: 60,
    DonGiaNhap: 70,
    GhiChu: "125825252",
    NoiDungGiamGia: "22222222",
  },
];

const cx = classNames.bind(style);
function QuanLyNguoiDung() {
  const [sortedInfo, setSortedInfo] = useState({});

  const columns = [
    {
      key: "TenHang",
      title: "Tên hàng",
      dataIndex: "TenHang",
      sorter: (a, b) => a.TenHang.length - b.TenHang.length,
      sortOrder: sortedInfo.columnKey === "TenHang" ? sortedInfo.order : null,
      ellipsis: true,
      fixed: "left",
    },
    {
      key: "SoLuong",
      title: "Số lượng",
      dataIndex: "SoLuong",
      sorter: (a, b) => a.math - b.math,
      sortOrder: sortedInfo.columnKey === "SoLuong" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      key: "DonGiaNhap",
      title: "Đơn giá nhập",
      dataIndex: "DonGiaNhap",
      sorter: (a, b) => a.DonGiaNhap - b.DonGiaNhap,
      sortOrder:
        sortedInfo.columnKey === "DonGiaNhap" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      key: "DonGiaBan",
      title: "Đơn giá bán",
      dataIndex: "DonGiaBan",
      sorter: (a, b) => a.DonGiaBan - b.DonGiaBan,
      sortOrder: sortedInfo.columnKey === "DonGiaBan" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      key: "GhiChu",
      title: "Ghi chú",
      dataIndex: "GhiChu",
      sorter: (a, b) => a.GhiChu.length - b.GhiChu.length,
      sortOrder: sortedInfo.columnKey === "GhiChu" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      key: "NoiDungGiamGia",
      title: "Nội dung giá bán",
      dataIndex: "NoiDungGiamGia",
      sorter: (a, b) => a.NoiDungGiamGia.length - b.NoiDungGiamGia.length,
      sortOrder:
        sortedInfo.columnKey === "NoiDungGiamGia" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];  
  return <div className={cx("container")}>
  <Table
    columns={columns}
    dataSource={data}
    // onChange={handleChange}
    scroll={{ x: 2000, y: 1000 }}
  />
</div>;
}

export default QuanLyNguoiDung;
