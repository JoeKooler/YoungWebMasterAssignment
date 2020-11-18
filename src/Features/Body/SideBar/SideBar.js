import Prices from "./Prices";
import Provinces from "./Provinces";
import RadioCategories from "./RadioCategories";
import RadioSubCategories from "./RadioSubCategories";

export default function SideBar() {
  return (
    <div className="SideBar">
      <div className="SideBarContainer">
        <RadioCategories />
        <Provinces />
        <Prices />
        <RadioSubCategories />
      </div>
    </div>
  );
}
