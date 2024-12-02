import { useState } from "react";
import "../styles/input.css";

export default function Input({ statePart, label, type, required }) {
  const name = label.split(" ").join("");
  const [value, setValue] = useState(statePart[name]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="input-field">
      <label htmlFor={label}>{`${label}:`}</label>
      <input
        name={name}
        id={label}
        className="input-type"
        type={type}
        value={value}
        required={required}
        onChange={handleChange}
      />
    </div>
  );
}
