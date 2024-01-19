import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function DataChart({ className }) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://plabs-fourier.vercel.app/api/music-dashboard/top-song`
      );
      const chartData = await response.json();
      setData({
        labels: chartData.data.map((data) => data.title),
        datasets: [
          {
            label: "",
            data: chartData.data.map((data) => data.sales),
            backgroundColor: [
              "rgba(136, 154, 255, 1)",
              "rgba(215, 221, 255, 1)",
            ],
            borderColor: ["rgba(255, 255, 255, 1)"],
            borderWidth: 1,
            spacing: 20,
          },
        ],
      });
    };
    fetchData();
  }, []);

  return (
    <div className={className}>
      <div className="chart-header">
        <h2>Most value songs</h2>
      </div>
      <div className="chart-content">
        <div className="chart-list">
          <p>
            1. Always authentic
            <br />
            <br />
            2. Not for me
            <br />
            <br />
            3. See you tomorrow
            <br />
            <br />
            4. Don’t worry
            <br />
            <br />
            5. Go away
            <br />
            <br />
            6. This is the end
            <br />
            <br />
            7. Yesterday
            <br />
            <br />
            8. Too late
          </p>
        </div>
        <div className="chart-chart">
          {data && <Pie data={data} options={options} />}
        </div>
      </div>
      <div className="list-button-container">
        <button className="list-button">Show more</button>
      </div>
    </div>
  );
}
