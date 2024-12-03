import { useState } from "react";
import "../styles/input.css";

export default function Input({
  selectedAny,
  formName,
  statePart,
  label,
  type,
  required,
}) {
  const name = label.split(" ").join("");

  function getState() {
    switch (formName) {
      case "Educational Info":
        if (statePart.length > 0) return statePart[selectedAny][name];
      case "Work Experience":
        if (statePart.length > 0) return statePart[selectedAny][name];
      case "Personal Info":
        if (statePart !== null) return statePart[name];
      default:
        return "";
    }
  }

  const [value, setValue] = useState(getState());

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
