'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { CldImage } from 'next-cloudinary';

export default function Home() {
  const [twin, setTwin] = useState<'mark' | 'nick'>('nick');

  return (
    <div className="my-auto flex h-dvh justify-center">
      <div className="m-20 my-auto">
        <div className="flex flex-col justify-between px-4">
          <h1 className="w-full text-7xl font-semibold">
            {twin === 'mark' ? (
              <span className="text-blue-500">Mark</span>
            ) : (
              <span className="text-green-500">Nick</span>
            )}
            <span> Koester</span>
          </h1>
          <div className="flex items-center gap-2">
            We are software engineers who also like coffee and cats
          </div>
          <button
            className="my-12 flex items-center gap-2 text-3xl"
            onClick={() => setTwin(twin === 'mark' ? 'nick' : 'mark')}
          >
            Meet my brother
            <ArrowRightCircleIcon className="size-10" />
          </button>
        </div>
      </div>
      <div className="m-20 my-auto">
        {twin === 'nick' ? (
          <CldImage
            src={
              'https://res.cloudinary.com/koester/image/upload/v1719359973/IMG_0444_g5v92s.heic'
            }
            className="rounded-md"
            width={400}
            height={800}
            alt="Nick Koester portrait"
            format="webp"
          />
        ) : (
          <CldImage
            src={
              'https://res.cloudinary.com/koester/image/upload/v1719366586/image_rneukl.jpg'
            }
            className="rounded-md"
            width={400}
            height={800}
            alt="Nick Koester portrait"
            format="webp"
          />
        )}
        <Link
          href="/nick"
          className="w-full p-4 text-center text-2xl font-semibold"
        >
          Learn more about me
        </Link>
      </div>
    </div>
  );
}

const PersonCard = ({ name, photo }: Props) => {
  return (
    <div>
      <CldImage
        src={photo}
        width={400}
        height={800}
        alt={`${name} portrait`}
        format="webp"
      />
      <Link
        href="/nick"
        className="w-full p-4 text-center text-2xl font-semibold"
      >
        Learn more about me
      </Link>
    </div>
  );
};

interface Props {
  name: string;
  photo: string;
}
