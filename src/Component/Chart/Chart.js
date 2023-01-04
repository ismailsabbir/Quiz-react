import React from "react";
import image from "../../../src/images/analysis.png";
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
    <div className="chart-main-con">
      <div className="chart-container">
        <div className="line">
          <u>
            <h4>Question Analytics</h4>
          </u>

          <LineChart width={280} height={300} data={data} className="line-ch">
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
        </div>

        <div className="bar">
          <u>
            <h4>Question Analytics</h4>
          </u>
          <BarChart
            width={280}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="total" stackId="a" fill="#8884d8" />
            {/* <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
          </BarChart>
        </div>
      </div>
      <div className="analysis-container">
        <div className="analysis-left">
          <img src={image} alt="" />
        </div>
        <div className="analysis-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
            />
          </svg>

          <h3>Analysis competitors</h3>
          <h6 className="analysis-text">
            Whole front do of plate heard oh ought. His defective nor convinced{" "}
            <br></br>
            residence own. Connection has put impossible own apartments<br></br>
            boisterous. At jointure ladyship an insisted so humanity he
          </h6>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default Chart;
