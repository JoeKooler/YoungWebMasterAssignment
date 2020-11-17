import { useState } from "react";

export default function RadioCategories({ choices, setCategory }) {
  const [value, setvalue] = useState("");
  const eiei = (e) => {
    setvalue(e.target.value);
    setCategory(e.target.value);
  };
  return (
    <div className="Categories">
      <strong style={{ marginBottom: "40px" }}>ประเภทร้านค้า</strong>
      <label onChange={eiei} className="RadioContainer">
        <input
          type="radio"
          value="ทั้งหมด"
          name="ทั้งหมด"
          checked={"ทั้งหมด" === value}
        ></input>
        <div className="RadioText">ทั้งหมด</div>
      </label>
      {choices.map((element) => {
        return (
          <label onChange={eiei} className="RadioContainer">
            <input
              type="radio"
              value={element.name}
              name={element.name}
              checked={element.name === value}
            ></input>
            <div className="RadioText">{element.name}</div>
          </label>
        );
      })}
    </div>
  );
}
