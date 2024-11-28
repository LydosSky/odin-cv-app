const user = {
  personalInfo: [
    { label: "First Name", type: "text", required: true },
    { label: "Last Name", type: "text", required: true },
    { label: "Email", type: "email", required: true },
    { label: "Phone", type: "text", required: false },
    { label: "GitHub", type: "text", required: false },
    { label: "LinkedIn", type: "text", required: false },
  ],
  educationalInfo: [
    { label: "Degree", type: "text", required: true },
    { label: "Field of Study", type: "text", required: true },
    { label: "Institution", type: "text", required: true },
    { label: "Start Date", type: "date", required: true },
    { label: "End Date", type: "date", required: false },
    { label: "Grade", type: "text", required: false },
  ],
  workExperience: [
    { label: "Job Title", type: "text", required: true },
    { label: "Company Name", type: "text", required: true },
    { label: "Start Date", type: "date", required: true },
    { label: "End Date", type: "date", required: false },
    { label: "Responsibilities", type: "textarea", required: false },
    { label: "Location", type: "text", required: false },
  ],
};

export default user;
