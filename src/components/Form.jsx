import Button from "./Button";
import "../styles/form.css";

export default function Form({ visibility, children }) {
  return (
    <form className={visibility}>
      {children}
      <Button text={"Submit"} />
    </form>
  );
}
