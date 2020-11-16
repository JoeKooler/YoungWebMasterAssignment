import React from "react";

export default function ProductList({ merchants = [] }) {
  return (
    <div>
      <div>
        {merchants.map((element) => {
          return (
            <div>
              <div>{element.shopNameTH}</div>
              <div>{element.categoryName}</div>
              <div>{element.subcategoryName}</div>
              <img src={element.coverImageId} alt="T_T" />
              <div>{element.facilities}</div>
              <div>{element.priceLevel}</div>
              <div>{element.isOpen}</div>
              <div>{element.highlightText}</div>
              <div>{element.recommendedItems}</div>
              <div>{element.addressProvinceName}</div>
              <div>{element.addressDistrictName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
