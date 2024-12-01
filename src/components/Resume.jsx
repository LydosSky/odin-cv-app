import '../styles/resume.css';

export default function Resume({ state }) {
  return (
    <div className="resume-container">
      <h1>{`${state.personalInfo.firstname} ${state.personalInfo.lastname}`}</h1>
      <div className="personal-info-container info-container">
        <h2>Personal</h2>
        <hr />
        <p>
          <span>Phone:</span> {state.personalInfo.phone}
        </p>
        <p>
          <span>Email:</span> {state.personalInfo.email}
        </p>
        <p>
          <span>Github:</span> {state.personalInfo.github}
        </p>
        <p>
          <span>LinkedIn:</span> {state.personalInfo.linkedin}
        </p>
      </div>

      <div className="educational-info-container info-container">
        <h2>Education</h2>
        <hr />
        {state.educationalInfo.map((info) => (
          <div className="educationalinfo" key={crypto.randomUUID()}>
            <p>
              <span>{info.degree}</span>
            </p>
            <p>{info.institution}</p>
            <p>{info.fieldofstudy}</p>
            <p>GPA: {info.grade && info.grade}</p>
            <p>
              {info.startdate.split('-')[0]} -{' '}
              {info.enddate && info.enddate.split('-')[0]}
            </p>
          </div>
        ))}
      </div>

      <div className="workexperience-info-container info-container">
        <h2>Work Experience</h2>
        <hr />
        {state.workExperience.map((info) => (
          <div key={crypto.randomUUID()} className="workexperience">
            <p>
              <span>{info.companyname}</span>
            </p>
            <p>{info.jobtitle}</p>
            <p>{info.location ? info.location : 'Remote'}</p>
            <p>
              {info.startdate.split('-')[0]} -{' '}
              {info.enddate && info.enddate.split('-')[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
