import resume from './resume.json';

const MarkPage = () => {
  return (
    <main className="min-h-screen">
      <div className="mb-4">
        <h1>Mark Koester</h1>
      </div>

      <section>
        <h2>Projects</h2>
        {resume.experience.map(
          ({ content, company, position, location }, index) => (
            <div key={index} className="mb-4">
              <h3>{position}</h3>
              <p>{company}</p>
              <p>{location}</p>
              <ul>
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ),
        )}
        <ul></ul>
      </section>
      <section className="mb-4">
        <h2>Education</h2>
        <p>{resume.education.institution}</p>
        <p>{resume.education.degree}</p>
        <p>{resume.education.gpa}</p>
      </section>
      <section className="mb-4">
        <h2>Technical Skills</h2>
        <h3>Programming Languages</h3>
        <ul>
          {resume.skills.languages.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <h3>Frameworks</h3>
        <ul>
          {resume.skills.frameworks.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export const metadata = {
  title: 'About Mark Koester',
};

export default MarkPage;
