import social from "../assets/Social.png"

export default function ChatDesc({image,name,country,job,desc,phone,email,dob}) {
  return (
    <div className="chat-desc">
      <div className="desc-top">
            <div className="image-container">
                <img src={image} alt="" />
            </div>
            <h2>{name}</h2>
            <h3>{country}</h3>
            <div className="user-desc">
                <p>{job}</p>
                <p>{desc}</p>
            </div>
            <div className="user-social">
                <div className="image-container">
                    <img src={social} alt="" />
                </div>
            </div>
      </div>
      <div className="desc-bottom">
            <div className="user-list">
                <span>Phone :</span>
                <span>Email :</span>
                <span>DOB : </span>
            </div>
            <div className="user-data">
                <p>{phone}</p>
                <p>{email}</p>
                <p>{dob}</p>
            </div>
      </div>
    </div>
  );
}
