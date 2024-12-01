const user = {
  personalInfo: [
    { label: 'first name', type: 'text', required: true },
    { label: 'last name', type: 'text', required: true },
    { label: 'email', type: 'email', required: true },
    { label: 'phone', type: 'text', required: false },
    { label: 'github', type: 'text', required: false },
    { label: 'linkedin', type: 'text', required: false },
  ],
  educationalInfo: [
    { label: 'degree', type: 'text', required: true },
    { label: 'field of study', type: 'text', required: true },
    { label: 'institution', type: 'text', required: true },
    { label: 'start date', type: 'date', required: true },
    { label: 'end date', type: 'date', required: false },
    { label: 'grade', type: 'text', required: false },
  ],
  workExperience: [
    { label: 'job title', type: 'text', required: true },
    { label: 'company name', type: 'text', required: true },
    { label: 'start date', type: 'date', required: true },
    { label: 'end date', type: 'date', required: false },
    // { label: "responsibilities", type: "textarea", required: false }, //
    { label: 'location', type: 'text', required: false },
  ],
};

export default user;
