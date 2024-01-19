import "../Styling/Dashboard.css"

export default function DataContainer({image,num,desc,color}) {
  return (
    <div className="data-container">
        <div className={color}>
            <img src={image} alt="" />
        </div>
        <div className="data-entry">
            <h3>{num}</h3>
            <span>{desc}</span>
        </div>
    </div>
  );
}