import "../styles/input.css";

export default function Input({ label, value, type, required }) {
  return (
    <div className="input-field">
      <label htmlFor={label}>{`${label}:`}</label>
      <input
        id={label}
        className="input-type"
        type={type}
        value={value}
        required={required}
      />
    </div>
  );
}
