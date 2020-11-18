import React from "react";
import Facilities from "./Facilities";
import IsOpen from "./IsOpen";
import Price from "./Price";
import { useDispatch, useSelector } from "react-redux";

export default function ProductList() {
  const { products } = useSelector((state) => state.SearchFilterReducer);
  return (
    <div className="Merchants">
      {products.map((element) => {
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
                <div>{element.addressDistrictName}</div>
                <div>{element.addressProvinceName}</div>
              </div>
              <div className="MerchantHighlight">
                <div>{element.highlightText}</div>
              </div>
              <div className="MerchantRecommended">
                <strong>เมนูแนะนำ : </strong>
                <div>{element.recommendedItems}</div>
              </div>
              <div className="MerchantFacility">
                <Facilities facilities={element.facilities} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
