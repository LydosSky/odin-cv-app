import { useState } from "react";
import Forms from "./components/Forms";
import Resume from "./components/Resume";
import "./styles/app.css";
import resume from "./utils/data";

function App() {
  // const [state, setState] = useState({
  //   personalInfo: null,
  //   educationalInfo: [],
  //   workExperience: [],
  // });

  const [state, setState] = useState(resume);
  const [selectedEdu, setSelectedEdu] = useState(0);
  const [selectedWork, setSelectedWork] = useState(0);

  return (
    <>
      <Forms
        educationalInfo={state.educationalInfo}
        personalInfo={state.personalInfo}
        workExperience={state.workExperience}
        selectedEdu={selectedEdu}
        selectedWork={selectedWork}
        setSelectedEdu={setSelectedEdu}
        setSelectedWork={setSelectedWork}
        setState={setState}
      />
      <Resume state={state} />
    </>
  );
}

export default App;
