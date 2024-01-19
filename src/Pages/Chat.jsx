import "../Styling/Chat.css";
import ChatMain from "../components/ChatMain";
import ChatRoom from "../components/ChatRoom";
import { useState, useEffect } from "react";
import NoRoom from "../components/NoRoom";
import AddRoom from "../components/AddRoom";
import ChatUserDesc from "../components/ChatUserDesc";

const userList = [
  {
    id: 1,
    name: "Rommel Malik Kusnadi",
    address: "Bandung,West Jawa",
    job: "Intern Front-End",
    desc: "I love play piano as well on free time.",
    phone: "3285924755",
    email: "rommel@gmail.com",
    dob: "22.09.2003",
    chat: [],
  },
  {
    id: 2,
    name: "M Fauzan Atthar",
    address: "Bandung,West Jawa",
    job: "Intern Front-End",
    desc: "I love play Guitar as well on free time.",
    phone: "42471024252",
    email: "atthar@gmail.com",
    dob: "13.11.2000",
    chat: [],
  },
  {
    id: 3,
    name: "Hilmy",
    address: "Bandung,West Jawa",
    job: "Tech Lead Front-End",
    desc: "I love play Guitar as well on free time.",
    phone: "343724732",
    email: "hilmy@gmail.com",
    dob: "01.02.1999",
    chat: [],
  },
];

export default function Chat() {
  let content;
  const [saveData, setSaveData] = useState(userList);
  const [roomState, setRoomstate] = useState(0);
  const [listRoom, setListRoom] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState({
    roomId: null,
  });

  function handleNoRoom() {
    setRoomstate(1);
  }

  function handleSelectContact() {
    setRoomstate(2);
  }

  function handleCancel() {
    if (selectedRoom.roomId) {
      setRoomstate(2);
    } else {
      setRoomstate(0);
    }
    return content;
  }

  useEffect(() => {
    const savedUserData = localStorage.getItem("chatData");
    if (savedUserData) {
      setSaveData(JSON.parse(savedUserData));
    }
  }, []);

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

  if (roomState === 1) {
    content = (
      <AddRoom
        onAddSelectContact={handleSelectContact}
        setRoom={setListRoom}
        listRoom={listRoom}
        onHandleCancel={handleCancel}
        roomState={roomState}
        setSelectedRoom={setSelectedRoom}
      />
    );
  } else if (roomState === 0) {
    content = <NoRoom onAddStartRoom={handleNoRoom} />;
  } else if (roomState === 2 && selectedRoom.roomId) {
    content = (
      <ChatMain
        UserData={userList}
        roomUser={selectedRoom.roomId}
        setSaveData={setSaveData}
        setListRoom={setListRoom}
        setRoomstate={setRoomstate}
        setSelectedRoom={setSelectedRoom}
        saveData={saveData}
        selectedRoom={selectedRoom}
        roomState={roomState}
        listRoom={listRoom}
      />
    );
  }

  return (
    <div className="page-content">
      <div className="chat">
        <ChatRoom
          onAddStartRoom={handleNoRoom}
          UserData={userList}
          roomData={listRoom}
          setSelectedRoom={setSelectedRoom}
          selectedRoom={selectedRoom}
          roomState={roomState}
          setRoomstate={setRoomstate}
        />
        {content}
        {selectedRoom.roomId && (
          <ChatUserDesc UserData={userList} roomUser={selectedRoom.roomId} />
        )}
      </div>
    </div>
  );
}
