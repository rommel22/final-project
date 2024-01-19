import photo from "../assets/Rectangle.png";
import photo1 from "../assets/music1.jpeg";
import photo2 from "../assets/music2.jpg";
import photo3 from "../assets/music3.jpg";
import share from "../assets/Share1.png";
import play from "../assets/Play.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";

const data = [
  {
    header: "// TRENDING",
    title: "Red Snapper: Performance Review",
    author: "- Kamelia",
    image: photo,
  },
  {
    header: "// LATEST",
    title: "Timeless Scene",
    author: "- Jonathan",
    image: photo1,
  },
  {
    header: "// HOT",
    title: "ColdPlay : Performance Review",
    author: "- Anthony",
    image: photo2,
  },
  {
    header: "// NEWS",
    title: "Starry Nights",
    author: "- Gomes",
    image: photo3,
  },
];

const renderSlides = data.map((imageData, i) => (
  <div className="carousel-image" key={i}>
    <img className="carousel-image-1" src={imageData.image} alt="" />
    <div className="carousel-desc">
      <span>{imageData.header}</span>
      <br />
      <h5>{imageData.title}</h5>
      <br />
      <p>{imageData.author}</p>
      <div className="carousel-buttons">
        <button className="carousel-button">
          <div className="button-play">
            <p>Play</p>
            <img src={play} alt="" />
          </div>
        </button>
        <button className="carousel-button">
          <img src={share} alt="" />
        </button>
      </div>
    </div>
  </div>
));

export default function HomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="home-carousel">
      <div className="home-header">
        <h2>Trendings</h2>
      </div>
      <div className="carousel-content">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          autoPlay={false}
          infiniteLoop={true}
          selectedItem={data[currentIndex]}
          onChange={handleChange}
          className="carousel-container"
        >
          {renderSlides}
        </Carousel>
      </div>
    </div>
  );
}
