import about from './about.json';
import EarlyLife from './AboutContent';

const MarkPage = () => {
  return (
    <main className="mx-auto max-w-screen-xl pb-48 pt-36">
      <section className="ms-12 flex">
        <div className="mx-2 w-1 shrink-0 self-stretch rounded-md bg-gradient-to-b from-transparent via-70% to-sky-400 duration-300 ease-in-out group-data-[scroll=hidden]:bottom-full" />
        <h1 className="ml-16 max-w-md pb-[512px] text-5xl">{about.intro}</h1>
        <div className="ml-auto hidden h-[400px] w-[400px] rounded-md bg-gray-300 sm:block" />
      </section>

      <EarlyLife />
    </main>
  );
};

export const metadata = {
  title: 'Koester | Mark',
};

export default MarkPage;
