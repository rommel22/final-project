import { useEffect } from "react";

export default function Room({ image, name, status, lastActive, lastChat,handleClick,selectedRoom }) {
  useEffect(() => {
    localStorage.setItem("selectedRoomData", JSON.stringify(selectedRoom));
  }, [selectedRoom]);
  return (
    <div onClick={handleClick} className="room">
      <div className="room-top">
        <div className="room-left">
          <div className="image-container">
            <img src={image} alt="" />
          </div>
          <div className="room-person">
            <h2>{name}</h2>
            <span>{status}</span>
          </div>
        </div>
        <div className="room-right">
            <span>{lastActive}</span>
        </div>
      </div>
      <div className="room-bottom">
        <p>{lastChat}</p>
      </div>
    </div>
  );
}
