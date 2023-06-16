import style from "./BieuDoBanHang.module.scss";
import classNames from "classnames/bind";

import LinePlots from "./BieuDo/LinePlots";
import BasicLine from "./BieuDo/BasicLine";
import ChartPie from "./BieuDo/ChartPie";
import CornerRadius from "./BieuDo/CornerRadiu";

import { Col, Row, Card, Space } from "antd";

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
  return (
    <div className={cx("contain")}>
      <h1>Bảng biểu đồ bán hàng</h1>
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
        <Col span={16} className={cx("corner-radius")}>
          <CornerRadius dataAPI={dataAPI} />
          <h3>Lượng hàng nhật theo từng sản phẩm</h3>
        </Col>
      </Row>
      <Row className={cx("chart")}>
        <Col span={24} className={cx("line-plots")}>
          <LinePlots dataChart={dataAPI} />
          <h3>Xu hướng sản phẩm bán của của hàng</h3>
        </Col>
      </Row>
      <Row className={cx("chart")}>
        <Col span={24} className={cx("basic-line")}>
          <BasicLine dataAPI={dataAPI} />
          <h3>Doanh số bán hàng théo tháng</h3>
        </Col>
      </Row>
    </div>
  );
}

export default BieuDoBanHang;
