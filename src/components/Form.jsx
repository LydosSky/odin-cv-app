import Button from "./Button";
import "../styles/form.css";

export default function Form({ name, setState, visibility, children }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const stateNow = {};
    formData.forEach((value, key) => {
      stateNow[key] = value;
    });

    switch (name) {
      case "Personal Info":
        setState((prevState) => ({
          workExperience: prevState.workExperience,
          educationalInfo: prevState.educationalInfo,
          personalInfo: { ...stateNow },
        }));
        return;
      case "Educational Info":
        setState((prevState) => ({
          personalInfo: prevState.personalInfo,
          educationalInfo: [...prevState.educationalInfo, stateNow],
          workExperience: prevState.workExperience,
        }));
        return;
      case "Work Experience":
        setState((prevState) => ({
          personalInfo: prevState.personalInfo,
          educationalInfo: prevState.educationalInfo,
          workExperience: [...prevState.workExperience, stateNow],
        }));
        return;
      default:
        return;
    }
  }

  return (
    <form method="post" onSubmit={handleSubmit} className={visibility}>
      {children}
      <Button type="submit" text={"Submit"} />
    </form>
  );
}
