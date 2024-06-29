'use client';
import { useState } from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import TwinImage from './TwinImage';
import TwinName from './TwinName';

export default function Home() {
  const [twin, setTwin] = useState<'mark' | 'nick'>('nick');

  return (
    <div className="my-auto h-dvh justify-center lg:flex lg:flex-row-reverse">
      <div className="relative my-20 grid grid-cols-12 grid-rows-1 items-center">
        <TwinImage
          src="https://res.cloudinary.com/koester/image/upload/v1719359973/IMG_0444_g5v92s.heic"
          alt="Nick Koester portrait"
          active={twin === 'nick'}
        />
        <TwinImage
          src="https://res.cloudinary.com/koester/image/upload/v1719366586/image_rneukl.jpg"
          alt="Mark Koester portrait"
          active={twin === 'mark'}
        />
      </div>
      <div className="lg:mx-20 lg:my-auto">
        <div className="px-4">
          <h1 className="w-full text-7xl font-semibold">
            <TwinName active={twin === 'nick'} className="text-green-500">
              Nick
            </TwinName>
            <TwinName active={twin === 'mark'} className="text-blue-500">
              Mark
            </TwinName>
            <span> Koester</span>
          </h1>
          <p className="my-2 text-2xl text-gray-400">
            We are software engineers who also like coffee and cats
          </p>
          <button
            className="my-12 flex items-center gap-2 text-3xl"
            onClick={() => setTwin(twin === 'mark' ? 'nick' : 'mark')}
          >
            Meet the other twin
            <ArrowRightCircleIcon className="size-10" />
          </button>
        </div>
      </div>
    </div>
  );
}
