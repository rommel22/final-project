import purple from "../assets/Ellipse_p.png";
import yellow from "../assets/Ellipse_y.png";
import more from "../assets/more1.png";

import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { Chart, Filler } from "chart.js";

Chart.register(Filler);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function DataGraph({ className, title }) {
  const [data, setData] = useState();

  {
    className === "data-graph" &&
      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(
            `https://plabs-fourier.vercel.app/api/music-dashboard/sales`
          );
          const chartData = await response.json();
          setData({
            labels,
            datasets: [
              {
                label: "Current Year",
                data: chartData.data.map((data) => data.current_year),
                borderColor: "rgba(196, 196, 196, 0.00)",
                backgroundColor: "#96A6FF",
                fill: true,
                tension: 0.3,
              },
              {
                label: "Last Year",
                data: chartData.data.map((data) => data.last_year),
                borderColor: "#E8B56B",
                backgroundColor: "#E8B56B",
                fill: true,
                tension: 0.3,
              },
            ],
          });
        };
        fetchData();
      }, []);
  }

  {
    className === "earnings-graph" &&
      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(
            `https://plabs-fourier.vercel.app/api/music-dashboard/sales`
          );
          const chartData = await response.json();
          setData({
            labels,
            datasets: [
              {
                label: "Current Year",
                data: chartData.data.map((data) => data.current_year),
                borderColor: "rgba(196, 196, 196, 0.00)",
                backgroundColor: "#96A6FF",
                fill: true,
                tension: 0.3,
              },
              {
                label: "Last Year",
                data: chartData.data.map((data) => data.last_year),
                borderColor: "#C887EB ",
                backgroundColor: "#C887EB ",
                fill: true,
                tension: 0.3,
              },
            ],
          });
        };
        fetchData();
      }, []);
  }
  return (
    <div className={className}>
      <div className="graph-header">
        <div className="graph-title">
          <h2>{title}</h2>
        </div>
        {className === "data-graph" && (
          <div className="graph-desc">
            <div className="graph-purple">
              <div className="image-container">
                <img src={purple} alt="" />
              </div>
              <span>Men</span>
            </div>
            <div className="graph-yellow">
              <div className="image-container">
                <img src={yellow} alt="" />
              </div>
              <span>Women</span>
            </div>
          </div>
        )}
        {className === "earnings-graph" && (
          <div className="list-desc">
            <span>Last Month</span>
            <div className="image-container">
              <img src={more} alt="" />
            </div>
          </div>
        )}
      </div>
      <div className="graph-content">
        {data && <Line options={options} data={data} />}
      </div>
    </div>
  );
}
