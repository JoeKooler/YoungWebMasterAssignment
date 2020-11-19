import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { setToggleSearchAction } from "../../Redux/SearchFilter/Action";

export default function ToggleSearchFilter() {
  const dispatch = useDispatch();
  const toggle = () => dispatch(setToggleSearchAction());
  return (
    <div>
      <FontAwesomeIcon
        icon={faFilter}
        className="ToggleSearchFilter"
        onClick={toggle}
      />
    </div>
  );
}
