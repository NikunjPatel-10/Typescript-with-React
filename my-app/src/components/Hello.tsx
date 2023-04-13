import React from "react";
import Context from "./store/Context";

function Hello() {
  const { name, setName } = React.useContext(Context);
  const [value, setValue] = React.useState("");

  const handleChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"] =
    ({ target: { value: newValue } }) => {
      setValue(newValue);
    };
  return (
    <div>
      <div>
        <label>
          Current name <input value={name} readOnly />
        </label>
      </div>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();

          setName(value);
        }}
      >
        <label>
          New name{" "}
          <input
            placeholder="Type in your name"
            value={value}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Hello;
