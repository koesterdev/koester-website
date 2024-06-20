import ScrollSection from './ScrollSection';
import about from './about.json';

const MarkPage = () => {
  return (
    <main className="mx-auto max-w-screen-xl pb-48 pt-36 text-gray-900">
      <section className="flex justify-between">
        <h1 className="max-w-md text-5xl">{about.intro}</h1>
        <PlaceholderImage width={400} height={400} />
      </section>
      <h2 className="text-3xl text-gray-700">Early life</h2>
      <p className="max-w-[800px] text-4xl">{about.about.early}</p>
      <div className="mt-16 w-fit">
        <PlaceholderImage width={1000} height={600} />
      </div>
      <section className="relative py-16 pl-24">
        <div className="absolute bottom-0 left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-transparent via-sky-400 via-70%" />
        <ScrollSection
          threshold={0.6}
          classNames="duration-500 transition-colors"
          nonVisibleClassNames="text-transparent"
        >
          <p className="max-w-2xl text-2xl">{about.about.school}</p>
        </ScrollSection>
        <ScrollSection
          threshold={0.6}
          classNames="duration-500 transition-colors"
          nonVisibleClassNames="text-transparent"
        >
          <p className="mt-16 max-w-2xl text-2xl">{about.about.career}</p>
        </ScrollSection>
        <ScrollSection
          threshold={0.6}
          classNames="duration-500 transition-colors"
          nonVisibleClassNames="text-transparent"
        >
          <p className="mt-16 max-w-2xl text-2xl">{about.about.now}</p>
        </ScrollSection>
      </section>

      <h2 className="text-3xl text-gray-700">Fun facts</h2>
      <p className="mt-4 rounded-md bg-gray-100 px-16 pb-16 pt-32 text-3xl transition-shadow hover:shadow-md">
        {about.facts.twin}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <p className="rounded-md bg-gray-100 px-16 pb-16 pt-32 text-3xl transition-shadow hover:shadow-md">
          {about.facts.cats}
        </p>
        <p className="rounded-md bg-gray-100 px-16 pb-16 pt-32 text-3xl transition-shadow hover:shadow-md">
          {about.facts.bass}
        </p>
      </div>
    </main>
  );
};

const PlaceholderImage = ({ width, height }: PlaceholderProps) => {
  return (
    <div
      className="shrink-0 rounded-md bg-gray-300"
      style={{
        width,
        height,
      }}
    />
  );
};

interface PlaceholderProps {
  width: number;
  height: number;
}

export const metadata = {
  title: 'About Mark Koester',
};

export default MarkPage;
