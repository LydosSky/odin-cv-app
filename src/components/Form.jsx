import Button from "./Button";
import "../styles/form.css";

export default function Form({ state, setState, visibility, children }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const stateNow = {};
    formData.forEach((value, key) => {
      stateNow[key] = value;
    });

    setState({ ...state, ...stateNow });
  }

  return (
    <form method="post" onSubmit={handleSubmit} className={visibility}>
      {children}
      <Button type="submit" text={"Submit"} />
    </form>
  );
}
