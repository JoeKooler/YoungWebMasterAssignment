import React from "react";

export default function Price({ price }) {
  const priceSymbol = ["฿", "฿", "฿", "฿"];

  return (
    <div className="PricesSymbol">
      {priceSymbol.map((element, index) => {
        if (index + 1 > price) {
          return <div>{element}</div>;
        } else {
          return <div style={{ color: "Black" }}>{element}</div>;
        }
      })}
      <div style={{ marginLeft: "1vw" }}>|</div>
    </div>
  );
}
