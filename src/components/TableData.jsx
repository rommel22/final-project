import group from "../assets/Group.png"
import share from "../assets/Share.png"
import download from "../assets/Download.png"
import fav from "../assets/Favourite.png"

export default function TableData({num,title,views,time}) {
  return (
    <tr>
      <td>{num}</td>
      <td>
        <img src={fav} alt="" />
      </td>
      <td>{title}</td>
      <td>{views}</td>
      <td>{time}</td>
      <td>
        <img src={download} alt="" />
      </td>
      <td>
        <img src={share} alt="" />
      </td>
      <td>
        <img src={group} alt="" />
      </td>
    </tr>
  );
}
