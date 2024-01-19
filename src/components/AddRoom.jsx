import { useEffect } from "react";

export default function AddRoom({
  onAddSelectContact,
  setRoom,
  listRoom,
  onHandleCancel,
  setSelectedRoom,
}) {
  function handleOnCLick(id) {
    onAddSelectContact();
    setRoom([...listRoom, id]);
    setSelectedRoom((prevstate) => {
      return {
        ...prevstate,
        roomId: id,
      };
    });
  }
  return (
    <div className="add-room">
      <div className="add-header">
        <h1>Select Your Contact</h1>
        <button className="button-cancel" onClick={onHandleCancel}>
          Cancel
        </button>
      </div>
      <button
        className="button-click"
        onClick={(e) => {
          handleOnCLick(1);
        }}
      >
        <p>Rommel</p>
      </button>
      <button
        className="button-click"
        onClick={(e) => {
          handleOnCLick(2);
        }}
      >
        <p>Atthar</p>
      </button>
      <button
        className="button-click"
        onClick={(e) => {
          handleOnCLick(3);
        }}
      >
        <p>Hilmy</p>
      </button>
    </div>
  );
}
