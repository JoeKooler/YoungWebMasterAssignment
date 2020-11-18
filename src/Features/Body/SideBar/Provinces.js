import { useDispatch, useSelector } from "react-redux";
import { setProvinceAction } from "../../../Redux/SearchFilter/Action";

export default function Provinces() {
  const dispatch = useDispatch();
  const setProvince = (data) => dispatch(setProvinceAction(data));

  const { provinces } = useSelector(
    (state) => state.SearchFilterReducer.fetchedData
  );
  
  const eiei = (e) => {
    console.log(e.target.value);
    if (e.target.value === "พื้นที่ใกล้ฉัน") {
      setProvince("");
    } else setProvince(e.target.value);
  };

  return (
    <div className="Provinces">
      <strong style={{ marginBottom: "25px" }}>จังหวัด/ใกล้ฉัน</strong>
      <select onChange={eiei}>
        <option>พื้นที่ใกล้ฉัน</option>;
        {provinces.map((element) => {
          return <option>{element}</option>;
        })}
      </select>
    </div>
  );
}
