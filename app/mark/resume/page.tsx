import { EB_Garamond } from 'next/font/google';
import { clsx } from 'clsx';
import resume from './resume.json';

const Garamond = EB_Garamond({
  subsets: ['latin'],
});

const MarkResume = () => {
  return (
    <main className={clsx('min-h-screen bg-gray-200 pt-8', Garamond.className)}>
      <div className="mx-auto max-w-screen-lg rounded bg-white px-10 shadow-sm">
        <h1 className="pt-8 text-center text-2xl font-semibold tracking-widest">
          Mark Koester
        </h1>

        <section>
          <SectionHeading title="Experience" />
          {resume.experience.map((position, index) => (
            <div key={index} className="mt-2">
              <Position {...position} />
            </div>
          ))}
        </section>
        <section className="mb-4">
          <SectionHeading title="Education" />
          <div className="mt-2 flex justify-between">
            <p className="font-semibold">{resume.education.institution}</p>
            <p className="italic">{resume.education.date}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">{resume.education.degree}</p>
            <p>
              GPA: {resume.education.gpa}—{resume.education.accolades}
            </p>
          </div>
        </section>
        <section className="mb-4 pb-8">
          <SectionHeading title="Technical Skills" />
          <ul className="mt-2">
            <li>
              <span className="font-semibold">Programming Languages: </span>
              {resume.skills.languages.join(', ')}
            </li>
          </ul>
          <ul>
            <li>
              <span className="font-semibold">Frameworks: </span>
              {resume.skills.frameworks.join(', ')}
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

// Change to just section with children
const SectionHeading = ({ title }: SectionProps) => {
  return (
    <h2 className="border-b border-b-gray-900 text-xl font-semibold uppercase tracking-widest">
      {title}
    </h2>
  );
};

interface SectionProps {
  title: string;
}

const Position = ({
  position,
  startDate,
  endDate,
  company,
  location,
  content,
}: PositionProps) => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="font-semibold">{position}</h3>
        <p className="italic">
          {startDate}–{endDate}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold">{company}</p>
        <p className="italic">{location}</p>
      </div>
      <ul className="ms-4 mt-1 list-disc">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

type PositionProps = (typeof resume)['experience'][number];

export const metadata = {
  title: 'About Mark Koester',
};

export default MarkResume;
