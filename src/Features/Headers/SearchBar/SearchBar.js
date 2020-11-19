import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProvinceAction,
  setCurrentSearchAction,
} from "../../../Redux/SearchFilter/Action";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

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
    <div className="SearchBarContainer">
      <form onSubmit={onSubmitHandler} className="SearchBar">
        <div className="NavProvince">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="NavProvinceSelectIcon"
          />
          <select onChange={onProvinceChangeHandler} className="NavProvinceBox">
            <option>พื้นที่ใกล้ฉัน</option>;
            {provinces.map((element) => {
              return <option>{element}</option>;
            })}
          </select>
        </div>
        <input
          onChange={onSearchChangeHandler}
          value={searchInput}
          className="SearchBox"
          placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดิ่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
        ></input>
        <button className="SearchButton">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}
