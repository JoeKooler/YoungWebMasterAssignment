import { useEffect, useState } from "react";

export default function Body() {
  const [JSONdata, setJSONData] = useState("");
  const [product, setProduct] = useState("");

  useEffect(() => {
    fetch("https://panjs.com/ywc18.json")
      .then((response) => response.json())
      .then((data) => setJSONData(data));
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
}
