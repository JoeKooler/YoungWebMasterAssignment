import { useDispatch, useSelector } from "react-redux";
import { setCategoryAction } from "../../../Redux/SearchFilter/Action";

export default function RadioCategories() {
  const { category, fetchedData } = useSelector(
    (state) => state.SearchFilterReducer
  );
  const { categories } = fetchedData;
  const dispatch = useDispatch();
  const setCategory = (data) => dispatch(setCategoryAction(data));

  const onChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="Categories">
      <strong style={{ marginBottom: "40px" }}>ประเภทร้านค้า</strong>
      {categories.map((element) => {
        return (
          <label onChange={onChangeHandler} className="RadioContainer">
            <input
              type="radio"
              value={element.name}
              name={element.name}
              checked={element.name === category}
            ></input>
            <div className="RadioText">
              {element.name === "" ? "ทั้งหมด" : element.name}
            </div>
          </label>
        );
      })}
    </div>
  );
}
