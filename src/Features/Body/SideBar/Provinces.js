export default function Provinces({ provinces, setProvince }) {
  
  const eiei = (e) => {
    console.log(e.target.value);
    if (e.target.value === "พื้นที่ใกล้ฉัน") {
      setProvince("");
    } else setProvince(e.target.value);
  };

  return (
    <div className="Provinces">
      <strong style={{ marginBottom: "25px" }}>จังหวัด/ใกล้ฉัน</strong>
      <select onChange={eiei}>
        <option>พื้นที่ใกล้ฉัน</option>;
        {provinces.map((element) => {
          return <option>{element}</option>;
        })}
      </select>
    </div>
  );
}
