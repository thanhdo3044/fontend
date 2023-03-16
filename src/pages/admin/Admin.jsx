import React from "react";
import {
  PictureOutlined,
  PieChartOutlined,
  UserOutlined,
  ReconciliationOutlined,
  TeamOutlined,
  ProfileOutlined,
  ScheduleOutlined,
  DollarCircleOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Route, Routes, Link } from "react-router-dom";

import classNames from "classnames/bind";
import style from "./Admin.module.scss";

import AnhSanPham from "../../components/pageAdmin/anhSanPham/AnhSanPham";
import BieuDoBanHang from "../../components/pageAdmin/bieuDoBanHang/BieuDoBanHang";
import QuanLyNguoiDung from "./../../components/pageAdmin/quanLyNguoiDung/QuanLyNguoiDung";
import QuanLyNhanVien from "../../components/pageAdmin/quanLyNhanVien/QuanLyNhanVien";
import QuanLySanPham from "../../components/pageAdmin/quanLySanPham/QuanLySanPham";

const { Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;
const cx = classNames.bind(style);

function Admins() {
  return (
    <Layout className={cx("contain")}>
      <Content className={cx("content-out")}>
        <Layout className={cx("layout")}>
          <Sider>
            <Menu mode="inline" className={cx("menu")} theme="light">
              <Menu.Item key="1">
                <Link to="/admin/bieudobanhang">
                  <PieChartOutlined />
                  <span>Biểu đồ bán hàng</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/admin/quanlynhanvien">
                  <TeamOutlined />
                  <span>Quản lý nhân viên</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="3">
                <Link to="/admin/quanlynguoidung">
                  <UserOutlined />
                  <span>Quản lý người dùng</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="4">
                <Link to="/admin/anhsanpham">
                  <PictureOutlined />
                  <span>Ảnh sản phẩm </span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="sub2"
                title={
                  <Link to="/admin/quanlysanpham">
                    <span>
                      <ReconciliationOutlined />
                      <span>Quản lý sản phẩm</span>
                    </span>
                  </Link>
                }
              >
                <Menu.Item key="5">
                  <Link to="/admin/quanlysanpham/chitiethoadon">
                    <ProfileOutlined />
                    <span>Chi Tiết Hóa Đơn</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/admin/quanlysanpham/hoadonbanhang">
                    <ScheduleOutlined />
                    <span>Hóa Đơn Bán Hàng</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="7">
                  <Link to="/admin/quanlysanpham/hang">
                    <DollarCircleOutlined />
                    <span>Hàng</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="8">
                  <Link to="/admin/quanlysanpham/loaihang">
                    <ProjectOutlined />
                    <span>Loại Hàng</span>
                  </Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content className={cx("content-in")}>
            <div className={cx("header")}>
              <Routes>
                <Route path="/anhsanpham" element={<AnhSanPham />} />
                <Route path="/quanlynhanvien" element={<QuanLyNhanVien />} />
                <Route path="/quanlynguoidung" element={<QuanLyNguoiDung />} />
                <Route path="/bieudobanhang" element={<BieuDoBanHang />} />
                <Route path="/quanlysanpham/*" element={<QuanLySanPham />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Content>
      <Footer className={cx("footer")}>Admin DoAn PhamThanhDo@ 2023</Footer>
    </Layout>
  );
}

export default Admins;
