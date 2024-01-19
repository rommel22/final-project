export default function NoRoom({onAddStartRoom}) {
  return (
    <div className="no-room">
      <h1>No Chat Room Available</h1>
      <button className="button-click" onClick={onAddStartRoom}>
        <p>Add Room</p>
      </button>
    </div>
  );
}
