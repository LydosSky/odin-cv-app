export default {
  personalInfo: {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    github: 'https://github.com/johndoes',
    linkedin: 'https://linkedin.com/in/johndoes',
  },
  educationalInfo: [
    {
      degree: 'Bachelor of Science',
      fieldofstudy: 'Computer Science',
      institution: 'University of Example',
      startdate: '2016-09-01',
      enddate: '2020-06-15',
      grade: '3.9',
    },
    {
      degree: 'Master of Science',
      fieldofstudy: 'Artificial Intelligence',
      institution: 'Institute of Advanced Studies',
      startdate: '2021-09-01',
      enddate: null, // Ongoing
      grade: null,
    },
  ],
  workExperience: [
    {
      jobtitle: 'Software Engineer',
      companyname: 'TechCorp Inc.',
      startdate: '2020-07-01',
      enddate: '2022-12-31',
      responsibilities: [
        'Developed and maintained web applications using React and Node.js.',
        'Optimized application performance, resulting in a 25% speed improvement.',
        'Collaborated with cross-functional teams to define project requirements.',
      ],
      location: 'New York, NY',
    },
    {
      jobtitle: 'Senior Software Engineer',
      companyname: 'Innovatech Solutions',
      startdate: '2023-01-01',

      enddate: null, // Current job
      responsibilities: [
        'Led a team of developers to design scalable backend services.',
        'Implemented CI/CD pipelines, reducing deployment time by 40%.',
        'Mentored junior developers and conducted code reviews.',
      ],
      location: null, // Remote work
    },
  ],
};
