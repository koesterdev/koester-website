'use client';
import ScrollSection from './ScrollSection';
import about from './about.json';

const EarlyLife = () => {
  return (
    <section className="relative py-16 pl-24">
      <ScrollSection
        rootMargin={{
          bottom: 400,
        }}
      >
        <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-gradient-to-b from-transparent via-sky-400 via-70% duration-300 ease-in-out group-data-[scroll=hidden]:bottom-full" />
        <p className="max-w-2xl text-2xl duration-300 ease-in-out group-data-[scroll=hidden]:translate-x-8 group-data-[scroll=hidden]:opacity-0">
          {about.about.school}
        </p>
        <p className="mt-16 max-w-2xl text-2xl transition delay-100 duration-300 ease-in-out group-data-[scroll=hidden]:translate-x-8 group-data-[scroll=hidden]:opacity-0">
          {about.about.career}
        </p>
        <p className="mt-16 max-w-2xl text-2xl delay-200 duration-300 ease-in-out group-data-[scroll=hidden]:translate-x-8 group-data-[scroll=hidden]:opacity-0">
          {about.about.now}
        </p>
      </ScrollSection>
    </section>
  );
};

export default EarlyLife;
