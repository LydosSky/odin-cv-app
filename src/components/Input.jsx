import { useState } from "react";
import "../styles/input.css";

export default function Input({ label, type, required }) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="input-field">
      <label htmlFor={label}>{`${label}:`}</label>
      <input
        name={label.split(" ").join("")}
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
