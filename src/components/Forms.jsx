import "../styles/forms.css";
import Input from "./Input";

export default function Forms() {
  const personalInfo = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "github",
    "linkedIn",
  ];
  const educationalInfo = [];
  const workExperience = [];

  return (
    <div className="forms-container">
      <Card cardName="Personal Info"></Card>
      <Card cardName="Educational Info" />
      <Card cardName="Work Experience" />
    </div>
  );
}
