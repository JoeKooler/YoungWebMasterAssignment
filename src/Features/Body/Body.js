import { useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";
import ProductList from "./ProductList/ProductList";

export default function Body() {
  const [JSONdata, setJSONData] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("ร้านอาหารและเครื่องดื่ม");
  const [province, setProvince] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);
  let { provinces, priceRange, merchants = [] } = JSONdata;
  const [subCategories, setSubCategories] = useState([]);
  const [subCategory, setSubCategory] = useState("");

  useEffect(() => {
    fetch("https://panjs.com/ywc18.json")
      .then((response) => response.json())
      .then((data) => {
        setCategories([{ name: "", subCategories: [] }, ...data.categories]);
        setProducts(data.merchants);
        return setJSONData(data);
      });
  }, []);

  useEffect(() => {
    setProducts([
      ...merchants.filter((element) => {
        console.log(price === element.priceLevel || price === "");

        return (
          (category.includes(element.categoryName) ||
            element.categoryName.includes(category)) &&
          (subCategory.includes(element.subcategoryName) ||
            element.subcategoryName.includes(subCategory)) &&
          (province.includes(element.addressProvinceName) ||
            element.addressProvinceName.includes(province)) &&
          (price === element.priceLevel || price === "")
        );
      }),
    ]);
  }, [category, province, price, subCategory, merchants]);

  useEffect(() => {
    const categoryArray = categories.filter((element) => {
      return element.name === category;
    });
    if (categoryArray.length > 0) {
      if (categoryArray[0].name !== "")
        setSubCategories(["", ...categoryArray[0].subcategories]);
      else setSubCategories([]);
    }
  }, [category, categories]);

  return (
    <div>
      <div className="SearchQueryText">ค้นหา</div>
      <div className="Body">
        <SideBar
          categories={categories}
          provinces={provinces}
          priceRange={priceRange}
          subCategories={subCategories}
          setCategory={setCategory}
          setSubCategory={setSubCategory}
          setProvince={setProvince}
          setPrice={setPrice}
        />
        <ProductList merchants={products} />
      </div>
    </div>
  );
}
