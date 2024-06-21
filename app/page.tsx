import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mx-2 max-w-screen-lg lg:mx-auto">
      <div className="my-28 flex-row-reverse justify-between md:flex">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Domestic_cat_by_Shagil_Kannur.jpg"
          width={600}
          height={600}
          alt="Mark and Nick Koester"
        />
        <div className="flex flex-col justify-between px-4 lg:px-12 lg:pt-4">
          <h1 className="w-full text-2xl font-semibold lg:text-4xl">
            Delivering decent software in a reasonable timeframe.
          </h1>
          <div className="flex items-center gap-2">
            <ArrowDownCircleIcon className="size-10" />
            <div className="text-lg">Learn more about Mark and Nick</div>
          </div>
        </div>
      </div>
      <div className="my-12 w-full text-center text-4xl">Meet the twins</div>
      <div className="flex justify-around">
        <PersonCard name="Nick Koester" />
        <PersonCard name="Mark Koester" />
      </div>
    </div>
  );
}

const PersonCard = ({ name, photo }: Props) => {
  return (
    <div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1024px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg"
        width={300}
        height={600}
        alt={`${name} portrait`}
      />
      <h2 className="w-full p-4 text-center text-2xl font-semibold">{name}</h2>
    </div>
  );
};

interface Props {
  name: string;
  photo?: string;
}
