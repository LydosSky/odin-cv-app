import { useState } from "react";
import Forms from "./components/Forms";
import Resume from "./components/Resume";
import "./styles/app.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({});

  return (
    <>
      <Forms personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
      <Resume />
    </>
  );
}

export default App;
