import "../styles/forms.css";
import Card from "./Card";
import Input from "./Input";
import user from "../utils/formfields";

export default function Forms({
  personalInfo,
  educationalInfo,
  workExperience,
  setState,
}) {
  function inputMapper(field) {
    return (
      <Input
        key={crypto.randomUUID()}
        label={field.label}
        type={field.type}
        required={field.required}
      />
    );
  }

  return (
    <div className="forms-container">
      <Card state={personalInfo} setState={setState} cardName="Personal Info">
        {user.personalInfo.map(inputMapper)}
      </Card>
      <Card
        state={educationalInfo}
        setState={setState}
        cardName="Educational Info"
      >
        {user.educationalInfo.map(inputMapper)}
      </Card>
      <Card
        state={workExperience}
        setState={setState}
        cardName="Work Experience"
      >
        {user.workExperience.map(inputMapper)}
      </Card>
    </div>
  );
}
