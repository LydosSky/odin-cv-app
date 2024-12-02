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
  function getInitialState() {
    switch (formName) {
      case "Educational Info":
        return statePart[selectedAny][name];
      case "Work Experience":
        return statePart[selectedAny][name];
      default:
        return statePart[name];
    }
  }

  const initialValue = getInitialState();
  const [value, setValue] = useState(initialValue);

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
