import React from "react";
import IsOpen from "./IsOpen";
import Facilities from "./Facilities";
import Price from "./Price";

export default function Product({ element }) {
  return (
    <div className="Merchant">
      <div
        style={{
          backgroundImage: "url(" + element.coverImageId + ")",
        }}
        alt="T_T"
        className="MerchantImagePreview"
      />
      <div className="MerchantText">
        {/* <div>{element.categoryName}</div> */}
        <div className="MerchantHead">
          <strong>{element.shopNameTH}</strong>
          <IsOpen isOpen={element.isOpen} />
        </div>
        <div className="MerchantSecondRow">
          <div>{element.subcategoryName} |</div>
          <Price price={element.priceLevel} />
          <div className="DistrictName">
            {element.addressDistrictName}
          </div>
          <div>{element.addressProvinceName}</div>
        </div>
        <div className="MerchantHighlight">
          <div>{element.highlightText}</div>
        </div>
        <div className="MerchantRecommended">
          <strong>เมนูแนะนำ : </strong>
          {element.recommendedItems.map((recommendedItem) => (
            <div>{recommendedItem},</div>
          ))}
        </div>
        <div className="MerchantFacility">
          <Facilities facilities={element.facilities} />
        </div>
      </div>
    </div>
  );
}
