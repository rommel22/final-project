import search from "../assets/search.png";
import HomeArtist from "../components/HomeArtist";
import HomeCarousel from "../components/HomeCarousel";
import HomeNews from "../components/HomeNews";
import HomeGenres from "../components/HomeGenres";
import "../Styling/Home.css"

export default function Home() {
  return (
    <div className="page-content">
      <div className="home">
        <div className="searchbar">
          <div className="searchbar-container">
            <img src={search} alt="" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for new music, news, artists..."
            />
          </div>
        </div>
        <div className="home-content">
              <HomeCarousel/>
              <HomeArtist/>
              <HomeNews/>
              <HomeGenres/>
          </div>
      </div>
    </div>
  );
}
