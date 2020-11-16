import { useState } from "react";

export default function RadioCategories({ choices, setCategory }) {
  const [value, setvalue] = useState("");
  const eiei = (e) => {
    setvalue(e.target.value);
    setCategory(e.target.value);
  };
  return choices.map((element) => {
    return (
      <label onChange={eiei}>
        <input
          type="radio"
          value={element.name}
          name={element.name}
          checked={element.name === value}
        ></input>
        {element.name}
      </label>
    );
  });
}
