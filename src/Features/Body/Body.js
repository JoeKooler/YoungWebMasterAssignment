import { useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";
import ProductList from "./ProductList/ProductList";

export default function Body() {
  const [JSONdata, setJSONData] = useState([]);
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("ร้านอาหารและเครื่องดื่ม");
  const [province, setProvince] = useState("");
  const [price, setPrice] = useState("");
  const { categories = [], provinces, priceRange, merchants } = JSONdata;
  const [subCategories, setSubCategories] = useState([]);
  const [subCategory, setSubCategory] = useState("");
  useEffect(() => {
    fetch("https://panjs.com/ywc18.json")
      .then((response) => response.json())
      .then((data) => {
        return setJSONData(data);
      });
  }, []);

  useEffect(() => {
    const categoryArray = categories.filter((element) => {
      return element.name === category;
    });
    if (categoryArray.length > 0) {
      setSubCategories([...categoryArray[0].subcategories]);
    }
  }, [category, categories]);

  useEffect(() => {
    console.log("Sub " + subCategories);
  }, [subCategories]);

  return (
    <div>
      <div className="Body">
        <SideBar
          categories={categories}
          provinces={provinces}
          priceRange={priceRange}
          subCategories={subCategories}
          setCategory={setCategory}
          setSubCategory={setSubCategory}
        />
        <ProductList merchants={merchants} />
      </div>
    </div>
  );
}
