import React from "react";
import {
  PictureOutlined,
  PieChartOutlined,
  UserOutlined,
  ReconciliationOutlined,
  TeamOutlined,
  CalendarOutlined,
  ProfileOutlined,
  ScheduleOutlined,
  DollarCircleOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Route, Routes } from "react-router-dom";

import classNames from "classnames/bind";
import style from "./Admin.module.scss";

import AnhSanPham from "./page/anhSanPham/AnhSanPham";
import BieuDoBanHang from "./page/bieuDoBanHang/BieuDoBanHang";
import QuanLyNguoiDung from "./page/quanLyNguoiDung/QuanLyNguoiDung";
import QuanLyNhanVien from "./page/quanLyNhanVien/QuanLyNhanVien";
import QuanLySanPham from "./page/quanLySanPham/QuanLySanPham";

const { Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;
const cx = classNames.bind(style);

// let { url, path } = useRouteMatch();

function Admins() {
  return (
    <>
      <div>
        <Layout>
          <Content className={cx("content-out")}>
            <Layout className={cx("layout")}>
              <Sider>
                <Menu mode="inline" className={cx("menu")} theme="light">
                  <Menu.Item key="1">
                    <TeamOutlined />
                    <span>Quản lý nhân viên</span>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <PieChartOutlined />
                    <span>Biểu đồ bán hàng</span>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <UserOutlined />
                    <span>Quản lý người dùng</span>
                  </Menu.Item>
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <PictureOutlined />
                        <span>Ảnh sản phẩm </span>
                      </span>
                    }
                  >
                    <Menu.Item>
                      <CalendarOutlined />
                      <span>Diệp đặc biệt</span>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <ReconciliationOutlined />
                        <span>Quản lý sản phẩm</span>
                      </span>
                    }
                  >
                    <Menu.Item key="4">
                      <ProfileOutlined />
                      <span>Chi Tiết Hóa Đơn</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                      <ScheduleOutlined />
                      <span>Hóa Đơn Bán Hàng</span>
                    </Menu.Item>
                    <Menu.Item key="6">
                      <DollarCircleOutlined />
                      <span>Hàng</span>
                    </Menu.Item>
                    <Menu.Item key="7">
                      <ProjectOutlined />
                      <span>Loại Hàng</span>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content className={cx("content-in")}>
                <div className={cx("header")}>
                  125
                  <Routes>
                    <Route path="/anhsanpham" element={<AnhSanPham />} />
                    <Route
                      path="/quanlynhanvien"
                      element={<QuanLyNhanVien />}
                    />
                    <Route
                      path="/quanlynguoidung"
                      element={<QuanLyNguoiDung />}
                    />
                    <Route path="/bieudobanhang" element={<BieuDoBanHang />} />
                    <Route path="/quanlysanpham" element={<QuanLySanPham />} />
                  </Routes>
                </div>
              </Content>
            </Layout>
          </Content>
          <Footer className={cx("footer")}>Admin DoAn PhamThanhDo@ 2023</Footer>
        </Layout>
      </div>
    </>
  );
}

export default Admins;
