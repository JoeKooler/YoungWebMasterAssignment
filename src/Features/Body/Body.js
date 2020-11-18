import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFetchedDataAction } from "../../Redux/SearchFilter/Action";
import SideBar from "./SideBar/SideBar";
import ProductList from "./ProductList/ProductList";

export default function Body() {
  const dispatch = useDispatch();
  const setFetchedData = () => dispatch(setFetchedDataAction());

  useEffect(() => {
    setFetchedData();
  }, []);

  return (
    <div>
      <div className="SearchQueryText">ค้นหา</div>
      <div className="Body">
        <SideBar />
        <ProductList />
      </div>
    </div>
  );
}
