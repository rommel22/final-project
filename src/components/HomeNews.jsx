import News from "./News";
import frame from "../assets/frame.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import frame5 from "../assets/frame5.png";

const news1 = "news-content-1";
const news2 = "news-content-2";
export default function HomeNews() {
  return (
    <div className="home-news">
      <div className="home-header">
        <h2>More news</h2>
      </div>
      <div className="news-content">
        <News
          className={news1}
          image={frame}
          title="Thomas Bank"
          desc="Working in his new album in 2021"
        />
        <News
          className={news1}
          image={frame2}
          title="Art"
          desc="Music and museums"
        />
        <News
          className={news1}
          image={frame3}
          title="News"
          desc="Chill out for our mind"
        />
        <News
          className={news2}
          image={frame4}
          title="Thomas Bank"
          desc="Working in his new album in 2021"
        />
        <News
          className={news1}
          image={frame5}
          title="Thomas Bank"
          desc="Working in his new album in 2021"
        />
      </div>
    </div>
  );
}
