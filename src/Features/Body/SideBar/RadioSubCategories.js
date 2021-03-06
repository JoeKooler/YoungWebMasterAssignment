import { useDispatch, useSelector } from "react-redux";
import { setSubCategoryAction } from "../../../Redux/SearchFilter/Action";

export default function RadioSubCategories() {
  const dispatch = useDispatch();
  const setSubCategory = (data) => dispatch(setSubCategoryAction(data));

  const { category, subCategory, subCategories } = useSelector(
    (state) => state.SearchFilterReducer
  );

  const onChangeHandler = (e) => {
    console.log("Sub ", subCategory);
    setSubCategory(e.target.value);
  };

  return (
    <div className="Categories">
      {subCategories.length > 0 ? (
        <strong style={{ marginBottom: "40px" }}>ประเภท {category}</strong>
      ) : (
        <></>
      )}
      {subCategories.map((element) => {
        return (
          <label onChange={onChangeHandler} className="RadioContainer">
            <input
              type="radio"
              value={element}
              name={element}
              checked={element === subCategory}
            ></input>
            <div className="RadioText">
              {element === "" ? "ทั้งหมด" : element}
            </div>
          </label>
        );
      })}
    </div>
  );
}
