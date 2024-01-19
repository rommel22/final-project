import more from "../assets/more1.png";
import UserList from "./userList";
import ava1 from "../assets/Avatar.png";

export default function DataList({ className,title }) {
  return (
    <div className={className}>
      <div className="list-header">
        <h2>{title}</h2>
        <div className="list-desc">
          <span>descending</span>
          <div className="image-container">
            <img src={more} alt="" />
          </div>
        </div>
      </div>
      {className === "data-list" && (
        <div className="list-content">
          <UserList ava={ava1} name="Annette Watson" rating="9.3" />
          <UserList ava={ava1} name="Annette Watson" rating="9.3" />
          <UserList ava={ava1} name="Annette Watson" rating="9.3" />
          <UserList ava={ava1} name="Annette Watson" rating="9.3" />
          <UserList ava={ava1} name="Annette Watson" rating="9.3" />
          <UserList ava={ava1} name="Annette Watson" rating="9.3" />
          <UserList ava={ava1} name="Annette Watson" rating="9.3" />
        </div>
      )}
      {className === "earnings-list" && (
        <div className="list-content">
          <UserList
            ava={ava1}
            name="Annette Watson"
            rating="9.3"
            money="$345.6"
          />
          <UserList
            ava={ava1}
            name="Annette Watson"
            rating="9.3"
            money="$345.6"
          />
          <UserList
            ava={ava1}
            name="Annette Watson"
            rating="9.3"
            money="$345.6"
          />
          <UserList
            ava={ava1}
            name="Annette Watson"
            rating="9.3"
            money="$345.6"
          />
          <UserList
            ava={ava1}
            name="Annette Watson"
            rating="9.3"
            money="$345.6"
          />
          <UserList
            ava={ava1}
            name="Annette Watson"
            rating="9.3"
            money="$345.6"
          />
          <UserList
            ava={ava1}
            name="Annette Watson"
            rating="9.3"
            money="$345.6"
          />
        </div>
      )}
      <div className="list-button-container">
        <button className="list-button">Show more</button>
      </div>
    </div>
  );
}
