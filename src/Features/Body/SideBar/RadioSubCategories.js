import { useState } from "react";

export default function RadioSubCategories({ choices, setSubCategory }) {
  const [value, setvalue] = useState("ร้านอาหารและเครื่องดื่ม");
  const eiei = (e) => {
    setvalue(e.target.value);
    setSubCategory(e.target.value);
  };

  return (
    <div className="Categories">
      <strong style={{ marginBottom: "40px" }}>ประเภท</strong>
      {choices.map((element) => {
        return (
          <label onChange={eiei} className="RadioContainer">
            <input
              type="radio"
              value={element}
              name={element}
              checked={element === value}
            ></input>
            <div className="RadioText">
              {element === "" ? "ทั้งหมด" : element}
            </div>
          </label>
        );
      })}
    </div>
  );
}
