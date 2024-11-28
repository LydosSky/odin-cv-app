export default function Input({ label, value, type = "text" }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} className="input-type" type={type} value={value} />
    </div>
  );
}
