import React from "react";

export default function Price({ price }) {
  const priceSymbol = ["฿", "฿", "฿", "฿"];

  return (
    <div className="PricesSymbol">
      {priceSymbol.map((element, index) => {
        console.log("Index " + index + " price " + price);
        if (index + 1 > price) {
          return <div style={{ color: "gray" }}>{element}</div>;
        } else {
          return <div>{element}</div>;
        }
      })}
      <div>|</div>
    </div>
  );
}
