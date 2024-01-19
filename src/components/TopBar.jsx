import layer from "../assets/Layer1.png";
import logout from "../assets/logout.png";
import notif from "../assets/notifications.png";
import ava from "../assets/Mask_Group.png";
import more from "../assets/more1.png";
import { Outlet } from "react-router-dom";

export default function TopBar() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-content">
          <div className="topbar-left">
            <div className="image-container">
              <img src={layer} alt="" />
            </div>
            <h2>8 people listening you</h2>
          </div>
          <div className="topbar-right">
            <div className="topbar-user">
              <div className="topbar-user-name">
                <p>Carlos López</p>
                <span>Artist</span>
              </div>
              <div className="image-container">
                <img src={ava} alt="" />
              </div>
              <button>
                <img src={more} alt="" />
              </button>
            </div>
            <div className="topbar-buttons">
              <button>
                <img src={notif} alt="" />
              </button>
              <button>
                <img src={logout} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
