import ChatApp from "./ChatApp";
import userPic from "../assets/Userpic.png";
import { useEffect } from "react";

export default function ChatMain({
  UserData,
  roomUser,
  saveData,
  setSaveData,
  setListRoom,
  setRoomstate,
  setSelectedRoom,
  selectedRoom,
  roomState,
  listRoom,
}) {
  const findData = UserData.find((data) => data.id === roomUser);
  const index = roomUser - 1;
  function handleDelete() {
    setRoomstate(0);
    setSelectedRoom((prevstate) => {
      return {
        ...prevstate,
        roomId: null,
      };
    });
    setListRoom(listRoom.filter((room) => room != roomUser));
    const newState = saveData.map((data) => {
      if (data.id === selectedRoom.roomId && data.chat.id != 0) {
        return {
          ...data,
          chat: [[]],
        };
      }
      return data;
    });
    setSaveData(newState);
    localStorage.setItem("roomStateData", JSON.stringify(roomState));
    localStorage.setItem("selectedRoomData", JSON.stringify(selectedRoom));
    localStorage.setItem("listRoomData", JSON.stringify(listRoom));
    // console.log(saveData);
  }

  useEffect(() => {
    localStorage.setItem("listRoomData", JSON.stringify(listRoom));
  }, [listRoom]);

  useEffect(() => {
    localStorage.setItem("roomStateData", JSON.stringify(roomState));
  }, [roomState]);

  useEffect(() => {
    const saveRoomState = localStorage.getItem("roomStateData");
    if (saveRoomState) {
      setRoomstate(JSON.parse(saveRoomState));
    }
  }, []);

  useEffect(() => {
    const saveListRoom = localStorage.getItem("listRoomData");
    if (saveListRoom) {
      setListRoom(JSON.parse(saveListRoom));
    }
  }, []);

  useEffect(() => {
    const saveSelectedRoom = localStorage.getItem("selectedRoomData");
    if (saveSelectedRoom) {
      setSelectedRoom(JSON.parse(saveSelectedRoom));
    }
  }, []);

  return (
    <div className="chat-main">
      <div className="chat-header">
        <div className="room-top">
          <div className="room-left">
            <div className="image-container">
              <img src={userPic} alt="" />
            </div>
            <div className="room-person">
              <h2>{findData.name}</h2>
              <span>Offline</span>
            </div>
          </div>
          <div className="room-right">
            <button className="button-cancel" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <ChatApp
        saveData={saveData}
        setSaveData={setSaveData}
        selectedRoom={selectedRoom}
      />
    </div>
  );
}
