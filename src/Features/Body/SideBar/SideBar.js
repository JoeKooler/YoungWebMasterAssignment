import Categories from "./Categories";

export default function SideBar({
  categories = [],
  provinces = [],
  priceRange = [],
}) {
  return (
    <div className="SideBar">
      <Categories categories={categories} />
      <div>
        {provinces.map((element) => {
          return <div>{element}</div>;
        })}
      </div>
      <div>
        {priceRange.map((element) => {
          return <div>{element}</div>;
        })}
      </div>
    </div>
  );
}
