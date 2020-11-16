import { useState } from "react";

export default function UseInput(initialState) {
  const [value, setvalue] = useState(initialState);
  const handleInput = (event) => {
    setvalue(event.target.value);
    console.log("value " + event.target.value);
  };
  return { value, onChange: handleInput };
}
