import "../Styling/Dashboard.css";
import "../Styling/Earnings.css";
import setting from "../assets/settings.png";
import more from "../assets/more1.png";
import arrow from "../assets/Arrow.png";
import DataContainer from "../components/DataContainer";
import person from "../assets/person.png";
import DataGraph from "../components/DataGraph";
import DataList from "../components/DataList";
import DataMap from "../components/DataMap";
import DataChart from "../components/DataChart";
export default function Earnings() {
  return (
    <div className="page-content">
      <div className="earnings">
        <div className="dashboard-header">
          <div className="dashboard-left">
            <h2>Earnings</h2>
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
          </div>
        </div>
        <div className="earnings-content-1">
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
        </div>
        <div className="earnings-content-2">
          <DataGraph title="Sales" className="earnings-graph"/>
          <DataChart className="earnings-chart" />
          <DataMap className="earnings-maps"/>
          <DataList className="earnings-list" title="Most value payer"/>
        </div>
      </div>
    </div>
  );
}
