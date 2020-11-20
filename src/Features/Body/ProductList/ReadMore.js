import React from "react";
import { useDispatch } from "react-redux";
import { setGetMoreContentsAction } from "../../../Redux/SearchFilter/Action";

export default function ReadMore() {
  const dispatch = useDispatch();
  const setGetMoreContents = () => dispatch(setGetMoreContentsAction());
  return (
    <button onClick={setGetMoreContents} className="ReadMoreButton">
      ดูเพิ่มเติม
    </button>
  );
}
