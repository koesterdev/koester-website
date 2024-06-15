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
      <h2>Education</h2>
      <h2>Technical Skills</h2>
    </main>
  );
};

export default MarkPage;
