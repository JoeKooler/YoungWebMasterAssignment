import Prices from "./Prices";
import Provinces from "./Provinces";
import RadioCategories from "./RadioCategories";
import RadioSubCategories from "./RadioSubCategories";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function SideBar() {
  const [isShow, setIsShow] = useState("");
  const { isSearchOpen } = useSelector((state) => state.SearchFilterReducer);

  useEffect(() => {
    if (isSearchOpen) {
      setIsShow("Show");
    } else setIsShow("");
  }, [isSearchOpen]);

  return (
    <div className={"SideBar " + isShow}>
      <div className="SideBarContainer">
        <RadioCategories />
        <Provinces />
        <Prices />
        <RadioSubCategories />
      </div>
    </div>
  );
}
