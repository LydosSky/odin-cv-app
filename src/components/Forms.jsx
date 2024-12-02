import "../styles/forms.css";
import Card from "./Card";
import Input from "./Input";
import user from "../utils/formfields";

export default function Forms({
  personalInfo,
  educationalInfo,
  workExperience,
  selectedWork,
  selectedEdu,
  setSelectedEdu,
  setSelectedWork,
  setState,
}) {
  function inputMapper(field, statePart, formName) {
    return (
      <Input
        key={crypto.randomUUID()}
        formName={formName}
        statePart={statePart}
        label={field.label}
        type={field.required}
        selectedAny={
          formName === "Educational Info" ? selectedEdu : selectedWork
        }
      />
    );
  }

  return (
    <div className="forms-container">
      <Card state={personalInfo} setState={setState} cardName="Personal Info">
        {user.personalInfo.map((field) =>
          inputMapper(field, personalInfo, "Personal Info"),
        )}
      </Card>
      <Card
        selectedEdu={selectedEdu}
        setSelectedEdu={setSelectedEdu}
        state={educationalInfo}
        setState={setState}
        cardName="Educational Info"
      >
        {user.educationalInfo.map((field) =>
          inputMapper(field, educationalInfo, "Educational Info"),
        )}
      </Card>
      <Card
        selectedWork={selectedWork}
        setSelectedWork={setSelectedWork}
        state={workExperience}
        setState={setState}
        cardName="Work Experience"
      >
        {user.workExperience.map((field) =>
          inputMapper(field, workExperience, "Work Experience"),
        )}
      </Card>
    </div>
  );
}
