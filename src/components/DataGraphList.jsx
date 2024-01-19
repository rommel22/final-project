import purple from "../assets/Ellipse_p.png";
import yellow from "../assets/Ellipse_y.png";
import red from "../assets/Ellipse_r.png";
import green from "../assets/Ellipse_g.png";
import UserList from "./userList";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

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

export const data = {
  labels: ["Spain", "United Kingdom", "EEUU", "Italy"],
  datasets: [
    {
      label: "",
      data: [20, 20, 15, 7],
      backgroundColor: ["#96A6FF", "#E8B56B", "#FF8795", "#ACFFE3"],
    },
  ],
};

export default function DataGraphList({ className }) {
  return (
    <div className={className}>
      <div className="graph-list-header">
        <h2>Streams by countries</h2>
      </div>
      <div className="list-content">
        <Doughnut data={data} options={options} />
        <UserList ava={purple} name="Spain" rating="20" percent="(↑32%)" />
        <UserList
          ava={yellow}
          name="United Kingdon"
          rating="20"
          percent="(↓32%)"
        />
        <UserList ava={red} name="EEUU" rating="15" percent="(↑24%)" />
        <UserList ava={green} name="italy" rating="7" percent="(↑12%)" />
      </div>
      <div className="list-button-container">
        <button className="list-button">Show more</button>
      </div>
    </div>
  );
}
