import Reserve from "../../../Reserve.png";
import ParkingLot from "../../../ParkingLot.png";
import Delivery from "../../../Delivery.png";

export default function Facilities({ facilities }) {
  const wordToImage = (facility) => {
    switch (facility) {
      case "ที่จอดรถ":
        return <img src={ParkingLot} alt="จอดได้ไม่งก"></img>;
      case "รับจองล่วงหน้า":
        return <img src={Reserve} alt="จองได้ๆ"></img>;
      case "สามารถนำสัตว์เลี้ยงเข้าได้":
        return <img src={Delivery} alt="จอดได้ไม่งก"></img>;
      default:
    }
  };

  return (
    <div>
      {facilities.map((element) => {
        return wordToImage(element);
      })}
    </div>
  );
}
