import logo from "../assets/Logo_solo_mockup_2.png";
import chart from "../assets/chart.png";
import files from "../assets/files.png";
import union from "../assets/Union.png";
import vector from "../assets/Vector.png";
import chart1 from "../assets/chart1.png";
import files1 from "../assets/files1.png";
import union1 from "../assets/Union1.png";
import vector1 from "../assets/Vector11.png";
import more from "../assets/more.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SideBar() {
  const buttons = [
    {
      id: 1,
      classname: "side-button-active",
      image: union,
      to: "/",
      imageActive: union1,
    },
    {
      id: 2,
      classname: "side-button-active",
      image: chart,
      to: "dashboard",
      imageActive: chart1,
    },
    {
      id: 3,
      classname: "side-button-active",
      image: files,
      to: "earnings",
      imageActive: files1,
    },
    {
      id: 4,
      classname: "side-button-active",
      image: vector,
      to: "chat",
      imageActive: vector1,
    },
  ];
  const [selectedButtonId, setSelectedButtonId] = useState(0);

  if (selectedButtonId !=0){
      localStorage.setItem("buttonData", JSON.stringify(selectedButtonId));
  }

  const handleButtonClick = (id) => {
    setSelectedButtonId(id);
  };

  useEffect(() => {
    const savedButtonData = localStorage.getItem("buttonData");
    if (savedButtonData) {
      setSelectedButtonId(JSON.parse(savedButtonData));
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="side-content">
        <div className="side-top">
          <div className="image-container">
            <img src={logo} alt="" />
          </div>
          <div className="side-buttons">
            {buttons.map((button) => (
              <Link to={button.to} key={button.id}>
                <button
                  className={
                    selectedButtonId === button.id
                      ? button.classname
                      : "side-button"
                  }
                  onClick={() => handleButtonClick(button.id)}
                >
                  <img
                    src={
                      selectedButtonId === button.id
                        ? button.imageActive
                        : button.image
                    }
                    alt=""
                  />
                </button>
              </Link>
            ))}
          </div>
        </div>
        <div className="side-bottom">
          <h3>Help</h3>
          <div className="side-bottom-EN">
            <h3>EN</h3>
            <img src={more} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
