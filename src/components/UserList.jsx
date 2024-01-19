export default function UserList({ ava, name, rating, money,percent }) {
  return (
    <div className="lists">
      <div className="list-content-1">
        <div className="image-container">
          <img src={ava} alt="" />
        </div>
        <span>{name}</span>
      </div>
      <div className="list-content-2">
        <p>{rating}</p>
        <p className="percent">{percent}</p>
      </div>
      {money && (
        <div className="list-content-3">
          <p>{money}</p>
        </div>
      )}
    </div>
  );
}
