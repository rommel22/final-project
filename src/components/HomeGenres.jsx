import Buttons from "../components/Buttons"
import Bubbles from "./Bubbles";
import circle from "../assets/circle.png"

export default function HomeGenres() {
  return (
    <div className="home-genres">
      <div className="home-header">
        <h2>Popular genres</h2>
      </div>
      <div className="genres-content">
        <div className="genres-buttons">
            <Buttons>Blues</Buttons>
            <Buttons>Classical</Buttons>
            <Buttons>Country</Buttons>
            <Buttons>Dance</Buttons>
            <Buttons>Electronic</Buttons>
            <Buttons>Hip-Hop</Buttons>
            <Buttons>Jazz</Buttons>
            <Buttons>Latin</Buttons>
            <Buttons>Metal</Buttons>
            <Buttons>Party</Buttons>
            <Buttons>R&B / Soul</Buttons>
            <Buttons>Reggae / Dancehall</Buttons>
            <Buttons>Soundtracks</Buttons>
            <Buttons>World</Buttons>
        </div>
        <div className="genres-bubbles">
            <Bubbles image={circle} name="Will Moon"/>
            <Bubbles image={circle} name="Will Moon"/>
            <Bubbles image={circle} name="Will Moon"/>
            <Bubbles image={circle} name="Will Moon"/>
            <Bubbles image={circle} name="Will Moon"/>
            <Bubbles image={circle} name="Will Moon"/>
        </div>
      </div>
    </div>
  );
}
