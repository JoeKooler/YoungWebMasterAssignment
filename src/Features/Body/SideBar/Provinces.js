export default function Provinces({ provinces }) {
  return (
    <div className="Provinces">
      <strong style={{ marginBottom: "25px" }}>จังหวัด/ใกล้ฉัน</strong>
      <select>
        <option>พื้นที่ใกล้ฉัน</option>;
        {provinces.map((element) => {
          return <option>{element}</option>;
        })}
      </select>
    </div>
  );
}
