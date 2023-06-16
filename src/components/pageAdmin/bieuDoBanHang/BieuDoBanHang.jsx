import style from "./BieuDoBanHang.module.scss";
import classNames from "classnames/bind";

import LinePlots from "./BieuDo/LinePlots";
import BasicLine from "./BieuDo/BasicLine";
import ChartPie from "./BieuDo/ChartPie";
import CornerRadius from "./BieuDo/CornerRadiu";

import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Col, Row, Card, Space, Radio } from "antd";

const dataAPI = [
  {
    Date: "2010-01",
    scales: 1998,
  },
  {
    Date: "2010-02",
    scales: 1850,
  },
  {
    Date: "2010-03",
    scales: 1720,
  },
  {
    Date: "2010-04",
    scales: 1818,
  },
];

const cx = classNames.bind(style);

function BieuDoBanHang() {
  const navigate = useNavigate();
  const onChange = (e) => {
    console.log(e.target.value);
    navigate(e.target.value);
  };
  return (

    <div className={cx("contain")}>
      {/* <div className={cx("contain")}>   */}
      {/* <LinePlots dataChart={dataAPI} /> */}
      <div>
        <Radio.Group onChange={onChange}>
          <Radio.Button value="xuHuong">Xu hướng</Radio.Button>
          <Radio.Button value="doanhSo">Doanh số</Radio.Button>
          <Radio.Button value="sanPham">Sản phẩm</Radio.Button>
        </Radio.Group>
      </div>
      <Row className={cx("chart")}>
        <Col span={8}>
          <Row>
            <div className={cx("chart-pie")}>
              <ChartPie dataAPI={dataAPI} />
            </div>
          </Row>
          <Row>
            <div className={cx("chart-pie")}>
              <ChartPie dataAPI={dataAPI} />
            </div>
          </Row>
        </Col>
        <Routes>
          <Route
            path="/xuHuong"
            element={
              <Col span={16} className={cx("line-plots")}>
                <CornerRadius dataChart={dataAPI} />
                <h3>Xu hướng sản phẩm bán của của hàng</h3>
              </Col>
            }
          />
          <Route
            path="/doanhSo"
            element={
              <Col span={16} className={cx("line-plots")}>
                <LinePlots dataChart={dataAPI} />
                <h3>Xu hướng sản phẩm bán của của hàng</h3>
              </Col>
            }
          />
          <Route
            path="/sanPham"
            element={
              <Col span={16} className={cx("basic-line")}>
                <BasicLine dataAPI={dataAPI} />
                <h3>Doanh số bán hàng théo tháng</h3>
              </Col>
            }
          />
        </Routes>
      </Row>
    </div>
  );
}

export default BieuDoBanHang;
