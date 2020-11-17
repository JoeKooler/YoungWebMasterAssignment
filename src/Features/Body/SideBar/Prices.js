export default function Prices({ priceRange, setPrice }) {
  const eiei = (e) => {
    switch (e.target.value) {
      case "กรุณาเลือก":
        setPrice("");
        break;
      case "ไม่เกิน 100 บาท":
        setPrice(1);
        break;
      case "100 - 300 บาท":
        setPrice(2);
        break;
      case "300 - 600 บาท":
        setPrice(3);
        break;
      case "มากกว่า 600 บาท":
        setPrice(4);
        break;
      default:
    }
  };

  return (
    <div className="Prices">
      <strong style={{ marginBottom: "25px" }}>ราคา</strong>
      <select onChange={eiei}>
        <option>กรุณาเลือก</option>
        {priceRange.map((element) => {
          return <option>{element}</option>;
        })}
      </select>
    </div>
  );
}
