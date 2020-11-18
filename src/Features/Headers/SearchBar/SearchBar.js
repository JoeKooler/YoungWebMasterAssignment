import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProvinceAction,
  setCurrentSearchAction,
} from "../../../Redux/SearchFilter/Action";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [provinceInput, setProvinceInput] = useState("");

  const dispatch = useDispatch();
  const setProvince = (data) => dispatch(setProvinceAction(data));
  const setCurrentSearch = (data) => dispatch(setCurrentSearchAction(data));
  const { provinces } = useSelector(
    (state) => state.SearchFilterReducer.fetchedData
  );

  const onProvinceChangeHandler = (e) => {
    setProvinceInput(e.target.value);
  };

  const onSearchChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(provinceInput, "Prov");
    if (e.target.value === "พื้นที่ใกล้ฉัน") {
      setProvince("");
    } else setProvince(provinceInput);
    setCurrentSearch(searchInput);
    setSearchInput("");
  };

  return (
    <div className="ProvincesHeader">
      <form onSubmit={onSubmitHandler}>
        <strong style={{ marginBottom: "25px" }}>จังหวัด/ใกล้ฉัน</strong>
        <select onChange={onProvinceChangeHandler}>
          <option>พื้นที่ใกล้ฉัน</option>;
          {provinces.map((element) => {
            return <option>{element}</option>;
          })}
        </select>
        <input onChange={onSearchChangeHandler} value={searchInput}></input>
        <button>EIEI</button>
      </form>
    </div>
  );
}
