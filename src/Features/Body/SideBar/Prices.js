import React from "react";

export default function Prices({ priceRange }) {
  return (
    <div className="Prices">
      <strong style={{ marginBottom: "25px" }}>ราคา</strong>
      <select>
        <option>กรุณาเลือก</option>;
        {priceRange.map((element) => {
          return <option>{element}</option>;
        })}
      </select>
    </div>
  );
}
