import { UserCircleIcon } from '@heroicons/react/24/outline';
import resume from './resume.json';
import Position from './Position';

const Nick = () => {
  return (
    <div className="min-h-dvh bg-gray-50">
      <div className="prose mx-auto max-w-xl py-10">
        <div className="flex items-center gap-2">
          <UserCircleIcon className="size-5" />
          <h1 className="text-xl">Nicholas Koester</h1>
        </div>
        {resume.experience.map((position, i) => (
          <Position key={i} {...position} />
        ))}
      </div>
    </div>
  );
};

export default Nick;
