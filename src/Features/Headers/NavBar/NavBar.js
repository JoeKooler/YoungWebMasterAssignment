import React from "react";
import { useDispatch } from "react-redux";
import { resetSearchAction } from "../../../Redux/SearchFilter/Action";

export default function NavBar() {
  const dispatch = useDispatch();
  const resetSearch = () => dispatch(resetSearchAction());
  return (
    <div className="NavBar">
      <button onClick={resetSearch}>หน้าแรก</button>
    </div>
  );
}
