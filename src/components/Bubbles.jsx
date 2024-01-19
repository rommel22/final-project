export default function Bubbles({ image, name }) {
  return (
    <div className="genres-bubble">
      <div className="bubbles-image">
        <img src={image} alt="" />
      </div>
      <p>{name}</p>
    </div>
  );
}
