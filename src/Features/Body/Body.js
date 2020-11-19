import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFetchedDataAction } from "../../Redux/SearchFilter/Action";
import SideBar from "./SideBar/SideBar";
import ProductList from "./ProductList/ProductList";
import SearchQueryText from "./SearchQueryText";

export default function Body() {
  const dispatch = useDispatch();
  const setFetchedData = () => dispatch(setFetchedDataAction());

  useEffect(() => {
    setFetchedData();
  }, []);

  return (
    <div>
      <SearchQueryText />
      <div className="Body">
        <SideBar />
        <ProductList />
      </div>
    </div>
  );
}
