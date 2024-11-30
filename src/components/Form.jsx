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

    setState((prevState) => {
      switch (name) {
        case "Personal Info":
          return {
            workExperience: prevState.workExperience,
            educationalInfo: prevState.educationalInfo,
            personalInfo: { ...stateNow },
          };
        case "Educational Info":
          return {
            personalInfo: prevState.personalInfo,
            educationalInfo: [...prevState.educationalInfo, stateNow],
            workExperience: prevState.workExperience,
          };
        case "Work Experience":
          return {
            personalInfo: prevState.personalInfo,
            educationalInfo: prevState.educationalInfo,
            workExperience: [...prevState.workExperience, stateNow],
          };
        default:
          return;
      }
    });
  }

  return (
    <form method="post" onSubmit={handleSubmit} className={visibility}>
      {children}
      <Button type="submit" text={"Submit"} />
    </form>
  );
}
