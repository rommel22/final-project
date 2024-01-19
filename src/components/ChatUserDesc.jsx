import userImg from "../assets/User.png";
import ChatDesc from "../components/ChatDesc";

export default function ChatUserDesc({ UserData, roomUser }) {
  const findData = UserData.find(data => data.id === roomUser);
  const desc = (
    <ChatDesc
      key={findData.id}
      image={userImg}
      name={findData.name}
      country={findData.address}
      job={findData.job}
      desc={findData.desc}
      phone={findData.phone}
      email={findData.email}
      dob={findData.dob}
    />
  );
  return <>{desc}</>;
}
