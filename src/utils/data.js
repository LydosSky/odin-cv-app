export default {
  name: "John Does",
  personalInfo: {
    firstName: "John",
    lastName: "Does",
    email: "john.doe@example.com",
    phone: "+1234567890",
    github: "https://github.com/johndoes",
    linkedIn: "https://linkedin.com/in/johndoes",
  },
  educationalInfo: [
    {
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      institution: "University of Example",
      startDate: "2016-09-01",
      endDate: "2020-06-15",
      grade: "3.9 GPA",
    },
    {
      degree: "Master of Science",
      fieldOfStudy: "Artificial Intelligence",
      institution: "Institute of Advanced Studies",
      startDate: "2021-09-01",
      endDate: null, // Ongoing
      grade: null,
    },
  ],
  workExperience: [
    {
      jobTitle: "Software Engineer",
      companyName: "TechCorp Inc.",
      startDate: "2020-07-01",
      endDate: "2022-12-31",
      responsibilities: [
        "Developed and maintained web applications using React and Node.js.",
        "Optimized application performance, resulting in a 25% speed improvement.",
        "Collaborated with cross-functional teams to define project requirements.",
      ],
      location: "New York, NY",
    },
    {
      jobTitle: "Senior Software Engineer",
      companyName: "Innovatech Solutions",
      startDate: "2023-01-01",

      endDate: null, // Current job
      responsibilities: [
        "Led a team of developers to design scalable backend services.",
        "Implemented CI/CD pipelines, reducing deployment time by 40%.",
        "Mentored junior developers and conducted code reviews.",
      ],
      location: null, // Remote work
    },
  ],
};
