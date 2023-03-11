

import style from "./BieuDoBanHang.module.scss";
import classNames from "classnames/bind";


import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';


const dataAPI=
[
  {
    "Date": "2010-01",
    "scales": 1998
  },
  {
    "Date": "2010-02",
    "scales": 1850
  },
  {
    "Date": "2010-03",
    "scales": 1720
  },
  {
    "Date": "2010-04",
    "scales": 1818
  },

]


const cx = classNames.bind(style);
function BieuDoBanHang() {

    const [data, setData] = useState([]);
  
    useEffect(() => {
      asyncFetch();
      dataAPI.forEach(e=>data.push(e));
    }, []);
  
    const asyncFetch = () => {
      fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    const config = {
      data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        tickCount: 5,
      },
      slider: {
        start: 0.1,
        end: 0.5,
      },
    };
  return <div><Line {...config} /></div>;
}

export default BieuDoBanHang;
