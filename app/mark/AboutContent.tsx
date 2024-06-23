'use client';
import { UserIcon } from '@heroicons/react/24/outline';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import ScrollSection from './ScrollSection';
import about from './about.json';

const EarlyLife = () => {
  return (
    <>
      <ScrollSection
        className="mx-3 ms-12 flex"
        rootMargin={{
          bottom: 400,
        }}
      >
        <div className="flex flex-col self-stretch">
          <div className="relative">
            <div className="absolute -left-4 size-16 rounded-full bg-sky-400/30 blur-md" />
            <UserIcon className="my-6 size-6 text-sky-900" />
          </div>
          <div className="mx-2 w-1 grow rounded-md bg-gradient-to-b from-sky-400 via-70% duration-300 ease-in-out group-data-[scroll=hidden]:grow-0" />
        </div>
        <div className="ms-24 pb-96">
          <h2 className="text-3xl text-gray-700">Early life</h2>
          <p className="max-w-[800px] text-4xl">{about.about.early}</p>
        </div>
      </ScrollSection>

      <ScrollSection
        className="mx-3"
        rootMargin={{
          bottom: 600,
        }}
      >
        <div className="h-[600px] w-full rounded-md bg-gray-300 transition duration-300 group-data-[scroll=hidden]:translate-x-8 group-data-[scroll=hidden]:opacity-0" />
      </ScrollSection>

      <ScrollSection
        className="mx-3 ms-12 flex"
        rootMargin={{
          bottom: 400,
        }}
      >
        <div className="flex flex-col self-stretch">
          <div className="w-1 grow rounded-md bg-gradient-to-b from-transparent via-sky-400 via-70% duration-300 ease-in-out group-data-[scroll=hidden]:grow-0" />
        </div>
        <div className="my-36 ps-24">
          <p className="max-w-2xl text-2xl duration-300 ease-in-out group-data-[scroll=hidden]:translate-x-8 group-data-[scroll=hidden]:opacity-0">
            {about.about.school}
          </p>
          <p className="mt-16 max-w-2xl text-2xl transition delay-100 duration-300 ease-in-out group-data-[scroll=hidden]:translate-x-8 group-data-[scroll=hidden]:opacity-0">
            {about.about.career}
          </p>
          <p className="mt-16 max-w-2xl text-2xl delay-200 duration-300 ease-in-out group-data-[scroll=hidden]:translate-x-8 group-data-[scroll=hidden]:opacity-0">
            {about.about.now}
          </p>
        </div>
      </ScrollSection>

      <ScrollSection
        className="mx-3"
        rootMargin={{
          bottom: 600,
        }}
      >
        <div className="h-[600px] w-full rounded-md bg-gray-300 transition duration-300 group-data-[scroll=hidden]:translate-x-8 group-data-[scroll=hidden]:opacity-0" />
      </ScrollSection>

      <ScrollSection
        className="mx-3 ms-12 flex h-48"
        rootMargin={{
          bottom: 400,
        }}
      >
        <div className="flex flex-col self-stretch">
          <div className="mx-2 w-1 grow rounded-md bg-gradient-to-b from-transparent via-70% to-sky-400 duration-300 ease-in-out group-data-[scroll=hidden]:grow-0" />
        </div>
      </ScrollSection>

      <ScrollSection className="mx-3 ms-12 flex" rootMargin={{ bottom: 400 }}>
        <div className="flex flex-col self-stretch">
          <div className="relative duration-300 group-data-[scroll=hidden]:opacity-0">
            <div className="absolute -left-4 size-16 rounded-full bg-sky-400/30 blur-md" />
            <LightBulbIcon className="my-6 size-6 text-sky-900" />
          </div>
          <div className="mx-2 w-1 grow rounded-md bg-gradient-to-b from-sky-400 via-70% duration-300 ease-in-out group-data-[scroll=hidden]:grow-0" />
        </div>
        <div className="mb-72 ms-12">
          <h2 className="text-3xl text-gray-700 duration-300 group-data-[scroll=hidden]:-translate-x-8 group-data-[scroll=hidden]:opacity-0">
            Fun facts
          </h2>
          <p className="text-4xl delay-200 duration-300 group-data-[scroll=hidden]:-translate-x-8 group-data-[scroll=hidden]:opacity-0">
            Some things that you might not know about me
          </p>
        </div>
      </ScrollSection>

      <ScrollSection className="mx-3" rootMargin={{ bottom: 400 }}>
        <div className="rounded-md bg-gray-100 px-16 pb-96 pt-16 transition duration-300 hover:shadow-md group-data-[scroll=hidden]:-translate-y-8 group-data-[scroll=hidden]:opacity-0">
          <p className="text-3xl">{about.facts.twin}</p>
        </div>
        <div className="mt-8 grid-cols-2 gap-8 transition delay-200 duration-300 group-data-[scroll=hidden]:-translate-x-8 group-data-[scroll=hidden]:opacity-0 md:grid">
          <div className="rounded-md bg-gray-100 px-16 pb-96 pt-16 transition-shadow hover:shadow-md">
            <p className="text-3xl">{about.facts.cats}</p>
          </div>
          <div className="mt-8 rounded-md bg-gray-100 px-16 pb-96 pt-16 transition delay-200 duration-300 hover:shadow-md group-data-[scroll=hidden]:translate-x-8 group-data-[scroll=hidden]:opacity-0 md:mt-0">
            <p className="text-3xl">{about.facts.bass}</p>
          </div>
        </div>
      </ScrollSection>
    </>
  );
};

export default EarlyLife;
