import type { Project } from './types';

const Project = ({ name, content }: Props) => (
  <div>
    <div>{name}</div>
    <ul>
      {content.map((bullet, i) => (
        <li key={i}>{bullet}</li>
      ))}
    </ul>
  </div>
);

interface Props extends Project {}

export default Project;
