import Product from "./Product";
import { useSelector } from "react-redux";
import ReadMore from "./ReadMore";

export default function ProductList() {
  const { products, currentContents } = useSelector(
    (state) => state.SearchFilterReducer
  );
  return (
    <div className="Merchants">
      {products.map((element, index) => {
        if (index < currentContents) return <Product element={element} />;
        return <></>;
      })}
      {products.length > currentContents ? <ReadMore /> : <></>}
    </div>
  );
}
