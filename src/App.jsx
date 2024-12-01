import { useState } from 'react';
import Forms from './components/Forms';
import Resume from './components/Resume';
import './styles/app.css';
import resume from './utils/data';

function App() {
  const [state, setState] = useState({
    personalInfo: null,
    educationalInfo: [],
    workExperience: [],
  });

  return (
    <>
      <Forms
        educationalInfo={state.educationalInfo}
        personalInfo={state.personalInfo}
        workExperience={state.workExperience}
        setState={setState}
      />
      <Resume state={resume} />
    </>
  );
}

export default App;
