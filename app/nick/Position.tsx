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
    <h3>{position}</h3>
    <div className="flex w-full justify-between">
      <div className="font-medium">{company}</div>
      <div className="italic">
        <span>{startDate}</span>-<span>{endDate}</span>
      </div>
    </div>
    {projects.map((project, i) => (
      <Project key={i} {...project} />
    ))}
  </div>
);

interface Props extends Position {}

export default Position;
