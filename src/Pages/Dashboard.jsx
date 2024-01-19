import "../Styling/Dashboard.css";
import setting from "../assets/settings.png";
import more from "../assets/more1.png";
import arrow from "../assets/Arrow.png";
import plus from "../assets/plus.png";
import DataContainer from "../components/DataContainer";
import mark from "../assets/mark.png";
import person from "../assets/person.png";
import DataList from "../components/DataList";
import DataGraph from "../components/DataGraph";
import DataGraphList from "../components/DataGraphList";

export default function Dashboard() {
  return (
    <div className="page-content">
      <div className="dashboard">
        <div className="dashboard-header">
          <div className="dashboard-left">
            <h2>Dashboard</h2>
            <div className="dashboard-desc">
              <p>My new amazing album</p>
              <img src={more} alt="" />
            </div>
          </div>
          <div className="dashboard-right">
            <button className="dashboard-button">
              <img src={setting} alt="" />
            </button>
            <button className="dashboard-button-2">
              <div className="dashboard-container">
                <p>Last 7 days </p>
                <img src={more} alt="" />
              </div>
            </button>
            <button className="dashboard-button-2">
              <div className="dashboard-container">
                <img src={arrow} alt="" />
                <p>Download as CSV</p>
              </div>
            </button>
            <button className="dashboard-button-3">
              <div className="dashboard-container-2">
                <img src={plus} alt="" />
                <p>New dashboard</p>
              </div>
            </button>
          </div>
        </div>
        <div className="dashboard-content">
          <DataContainer
            color="image-p"
            image={person}
            num="62"
            desc="Listener"
          />
          <DataContainer
            color="image-g"
            image={person}
            num="62"
            desc="Listener"
          />
          <DataContainer
            color="image-r"
            image={person}
            num="62"
            desc="Listener"
          />
          <DataContainer
            color="image-b"
            image={person}
            num="62"
            desc="Listener"
          />
          <DataContainer
            color="image-y"
            image={person}
            num="62"
            desc="Listener"
          />
          <DataContainer
            color="image-b"
            image={person}
            num="62"
            desc="Listener"
          />
          <DataList className="data-list" title="Fans/Hours listening to you"/>
          <DataGraphList className="data-graph-list" />
          <DataGraph title="New listeners by month" className="data-graph" />
        </div>
      </div>
    </div>
  );
}
