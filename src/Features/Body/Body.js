import { useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";
import ProductList from "./ProductList/ProductList";

export default function Body() {
  const [JSONdata, setJSONData] = useState([]);
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [province, setProvince] = useState("");
  const [price, setPrice] = useState("");
  const { categories, provinces, priceRange } = JSONdata;
  useEffect(() => {
    fetch("https://panjs.com/ywc18.json")
      .then((response) => response.json())
      .then((data) => {
        return setJSONData(data);
      });
  }, []);

  useEffect(() => {
    console.log(categories, provinces, priceRange);
  }, [categories, provinces, priceRange]);

  return (
    <div>
      <div>
        <SideBar
          categories={categories}
          provinces={provinces}
          priceRange={priceRange}
        />
        <ProductList />
      </div>
    </div>
  );
}
