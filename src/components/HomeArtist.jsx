import photo from "../assets/Rectangle3.png";
import TableData from "./TableData";

export default function HomeArtist() {
  return (
    <div className="home-artist">
      <div className="home-header">
        <h2>Artist of the week</h2>
      </div>
      <div className="artist-content">
        <div className="artist-image">
          <img src={photo} alt="" />
        </div>
        <div className="artist-desc">
          <span>// Album</span>
          <h3>Always Authentic</h3>
          <h4>Monica Lee</h4>
          <p>
            The artists we represent are one of the most successful in Virginia
            and also were a huge breakthrough in the international market,
            topping radio and sales around the world.
          </p>
          <table>
            <TableData num="1" title="No more time" views="42,822" time="3:21"/>
            <TableData num="2" title="No more time" views="42,822" time="3:21"/>
            <TableData num="3" title="No more time" views="42,822" time="3:21"/>
            <TableData num="4" title="No more time" views="42,822" time="3:21"/>
            <TableData num="5" title="No more time" views="42,822" time="3:21"/>
          </table>
          <div className="list-button-container">
            <button className="list-button">Listen to full album</button>
          </div>
        </div>
      </div>
    </div>
  );
}
