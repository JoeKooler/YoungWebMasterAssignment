import { useEffect } from "react";
import RadioCategories from "./RadioCategories";
import RadioSubCategories from "./RadioSubCategories";

export default function SideBar({
  categories = [],
  provinces = [],
  priceRange = [],
  subCategories = [],
  setCategory,
  setSubCategory,
}) {
  useEffect(() => {
    // console.log("Subcat " + subCategories);
  });

  return (
    <div className="SideBar">
      <RadioCategories choices={categories} setCategory={setCategory} />
      <select>
        {provinces.map((element) => {
          return <option>{element}</option>;
        })}
      </select>
      <select>
        {priceRange.map((element) => {
          return <option>{element}</option>;
        })}
      </select>
      <RadioSubCategories
        choices={subCategories}
        setSubCategory={setSubCategory}
      />
    </div>
  );
}
