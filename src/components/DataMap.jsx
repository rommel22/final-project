import more from "../assets/more1.png";
import blue from "../assets/Oval.png";
import yellow from "../assets/Oval_y.png";
import purple from "../assets/Oval_p.png";
import usa from "../assets/usa.png";
import "../Styling/Earnings.css"
import "../Styling/Dashboard.css"

export default function DataMap({ className }) {
  return (
    <div className={className}>
      <div className="list-header">
        <h2>Revenue by location</h2>
        <div className="list-desc">
          <span>Last Month</span>
          <div className="image-container">
            <img src={more} alt="" />
          </div>
        </div>
      </div>
      <div className="map-content">
        <div className="map-top">
            <div className="map-top-1">
                <div className="image-container">
                    <img src={blue} alt="" />
                </div>
                <span>Operational</span>
            </div>
            <div className="map-top-1">
                <div className="image-container">
                    <img src={yellow} alt="" />
                </div>
                <span>Pending Setup</span>
            </div>
            <div className="map-top-1">
                <div className="image-container">
                    <img src={purple} alt="" />
                </div>
                <span>Upgraded</span>
            </div>
        </div>
        <div className="map-middle">
            <div className="image-container">
                <img src={usa} alt="" />
            </div>
        </div>
        <div className="map-bottom">
            <div className="map-bottom-1">
                <p>San Francisco</p>
                <span>CA</span>
            </div>
            <div className="map-bottom-1">
                <p>Austin</p>
                <span>TX</span>
            </div>
            <div className="map-bottom-1">
                <p>Montgomery</p>
                <span>AL</span>
            </div>
            <div className="map-bottom-1">
                <p>Helena</p>
                <span>MT</span>
            </div>
            <div className="map-bottom-1">
                <p>Raleigh</p>
                <span>NC</span>
            </div>
        </div>
      </div>
    </div>
  );
}
