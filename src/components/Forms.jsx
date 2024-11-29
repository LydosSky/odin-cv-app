import "../styles/forms.css";
import Card from "./Card";
import Input from "./Input";
import user from "../utils/formfields";

export default function Forms() {
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
      <Card cardName="Personal Info">{user.personalInfo.map(inputMapper)}</Card>
      <Card cardName="Educational Info">
        {user.educationalInfo.map(inputMapper)}
      </Card>
      <Card cardName="Work Experience">
        {user.workExperience.map(inputMapper)}
      </Card>
    </div>
  );
}
