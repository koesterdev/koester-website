import Project from './Project';
import type { Position } from './types';

const Position = ({
  company,
  position,
  startDate,
  endDate,
  projects,
}: Props) => (
  <div>
    <h2>{company}</h2>
    <div>{position}</div>
    <em>
      <span>{startDate}</span>-<span>{endDate}</span>
    </em>
    {projects.map((project, i) => (
      <Project key={i} {...project} />
    ))}
  </div>
);

interface Props extends Position {}

export default Position;
