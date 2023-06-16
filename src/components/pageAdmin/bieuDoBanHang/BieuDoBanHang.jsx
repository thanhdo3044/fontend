import style from "./BieuDoBanHang.module.scss";
import classNames from "classnames/bind";

import LinePlots from "./BieuDo/LinePlots";

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
      <LinePlots dataChart={dataAPI} />
    </div>
  );
}

export default BieuDoBanHang;
