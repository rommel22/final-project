import search from "../assets/search.png";
import arrow from "../assets/Arrow_Down.png";
import cross from "../assets/Cross.png";
import userPic from "../assets/Userpic.png";
import "../Styling/Chat.css";
import Room from "./Room";
import { useEffect } from "react";

export default function ChatRoom({
  onAddStartRoom,
  UserData,
  roomData,
  setSelectedRoom,
  selectedRoom,
  roomState,
  setRoomstate,
}) {
  function handleClickUser(id) {
    setSelectedRoom((prevstate) => {
      return {
        ...prevstate,
        roomId: id,
      };
    });
    setRoomstate(2);
  }

  const filteredData = UserData.filter((data) => roomData.includes(data.id));
  filteredData.sort((a, b) => roomData.indexOf(a.id) - roomData.indexOf(b.id));
  const Rooms = filteredData.map((user) => (
    <Room
      handleClick={(event) => {
        handleClickUser(user.id);
      }}
      key={user.id}
      image={userPic}
      name={user.name}
      status="Online"
      lastActive="3h ago"
      lastChat="Analysis of foreign experience, as it is"
      selectedRoom={selectedRoom}
    />
  ));
  return (
    <div className="chat-room">
      <div className="searchbar-small">
        <div className="searchbar-container-small">
          <img src={search} alt="" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for new music, news, artists..."
          />
        </div>
      </div>
      <div className="room-content">
        <div className="room-options">
          <div className="options-left">
            <p>Sort By :</p>
            <button className="latest">
              <span>Latest First</span>
              <img src={arrow} alt="" />
            </button>
          </div>
          <div className="options-right">
            <p>Add New</p>
            <button className="add" onClick={onAddStartRoom}>
              <img src={cross} alt="" />
            </button>
          </div>
        </div>
        <div className="room-messages-container">
          <div className="room-messages">{Rooms}</div>
        </div>
      </div>
    </div>
  );
}
