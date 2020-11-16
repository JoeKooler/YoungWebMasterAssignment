import UseInput from "../../../Hooks/UseInput";

export default function Categories({ categories }) {
  const { value: category, onChange: onCategoryChange } = UseInput("");
  return (
    <>
      <div onChange={onCategoryChange} className="SideBarRadio">
        {categories.map((element) => {
          return (
            <label>
              <input
                type="radio"
                value={element.name}
                name={element.name}
                checked={element.name === category}
              ></input>
              {element.name}
            </label>
          );
        })}
      </div>
    </>
  );
}
