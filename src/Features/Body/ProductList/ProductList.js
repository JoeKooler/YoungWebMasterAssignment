import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

export default function ProductList() {
  const { products } = useSelector((state) => state.SearchFilterReducer);
  return (
    <div className="Merchants">
      {products.map((element) => {
        return <Product element={element} />;
      })}
    </div>
  );
}
