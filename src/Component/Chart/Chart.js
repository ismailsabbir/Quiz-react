import React from "react";
// import { useLoaderData } from "react-router-dom";
import "./Chart.css";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Chart = () => {
  //const datas = useLoaderData();
  //const dataa = datas.data;
  //console.log(dataa);

  const data = [
    {
      id: 1,
      name: "React",
      logo: "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
      total: 8,
    },
    {
      id: 2,
      name: "JavaScript",
      logo: "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
      total: 9,
    },
    {
      id: 4,
      name: "CSS",
      logo: "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
      total: 8,
    },
    {
      id: 5,
      name: "Git",
      logo: "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
      total: 11,
    },
  ];

  return (
    <div className="chart-container">
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>

      {/* {data.map((data) => (
        <Statistic datta={data}></Statistic>
      ))}  */}
    </div>
  );
};

export default Chart;
