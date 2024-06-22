import about from './about.json';
import EarlyLife from './EarlyLife';

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
      <EarlyLife />

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
