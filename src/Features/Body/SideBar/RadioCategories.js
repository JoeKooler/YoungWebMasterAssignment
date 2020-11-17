import { useState } from "react";

export default function RadioCategories({ choices, setCategory }) {
  const [value, setvalue] = useState("ร้านอาหารและเครื่องดื่ม");
  const eiei = (e) => {
    setvalue(e.target.value);
    setCategory(e.target.value);
  };

  return (
    <div className="Categories">
      <strong style={{ marginBottom: "40px" }}>ประเภทร้านค้า</strong>
      {choices.map((element) => {
        return (
          <label onChange={eiei} className="RadioContainer">
            <input
              type="radio"
              value={element.name}
              name={element.name}
              checked={element.name === value}
            ></input>
            <div className="RadioText">
              {element.name === "" ? "ทั้งหมด" : element.name}
            </div>
          </label>
        );
      })}
    </div>
  );
}
