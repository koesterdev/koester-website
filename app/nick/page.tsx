import { UserCircleIcon } from '@heroicons/react/24/outline';
import resume from './resume.json';
import Position from './Position';
import { Metadata } from 'next';

const Nick = () => {
  return (
    <div className="min-h-dvh bg-neutral-100 md:py-10">
      <div className="mx-auto max-w-4xl rounded-md bg-white px-16 py-10">
        <div className="flex items-center gap-4">
          <UserCircleIcon className="size-20 stroke-1" />
          <h1 className="text-4xl font-light">Nicholas Koester</h1>
        </div>
        <div className="prose max-w-full">
          {resume.experience.map((position, i) => (
            <Position key={i} {...position} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: 'Koester | Nick',
  description: 'Personal website for Mark and Nick Koester',
};

export default Nick;
