import { useEffect } from "react";
import Prices from "./Prices";
import Provinces from "./Provinces";
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
      <div className="SideBarContainer">
        <RadioCategories choices={categories} setCategory={setCategory} />
        <Provinces provinces={provinces} />
        <Prices priceRange={priceRange} />
        <RadioSubCategories
          choices={subCategories}
          setSubCategory={setSubCategory}
        />
      </div>
    </div>
  );
}
