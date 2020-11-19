import React from "react";
import { useSelector } from "react-redux";
export default function SearchQueryText() {
  const { category, province, price, subCategory } = useSelector(
    (state) => state.SearchFilterReducer
  );

  const priceNumToText = () => {
    console.log("eee", price);
    switch (price) {
      case 1:
        return "ไม่เกิน 100 บาท";
      case 2:
        return "100 - 300 บาท";
      case 3:
        return "300 - 600 บาท";
      case 4:
        return "มากกว่า 600 บาท";
      default:
    }
  };

  return (
    <div>
      <div className="SearchQueryText">
        ผลการค้นหา {category}
        {province !== "" ? <> ใน {province}</> : <></>}
        {price !== "" ? <> ราคา {priceNumToText()}</> : <></>}{" "}
        {subCategory !== "" ? <> {subCategory}</> : <></>}
      </div>
    </div>
  );
}
