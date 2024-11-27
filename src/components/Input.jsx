export default function Input({ value, type = "text" }) {
  return (
    <div>
      <label htmlFor={value}>{value}</label>
      <input id={value} className="input-type" type={type} />
    </div>
  );
}
