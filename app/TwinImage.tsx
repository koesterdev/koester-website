import clsx from 'clsx';
import { CldImage } from 'next-cloudinary';

const TwinImage = ({ src, alt, active }: Props) => {
  const imageClasses = clsx(
    'col-span-8 row-start-1 rounded-md transition-all',
    {
      'z-10 col-start-1 mt-10': active,
      'col-start-4 mb-10 select-none opacity-10': !active,
    },
  );

  return (
    <CldImage
      src={src}
      className={imageClasses}
      width={400}
      height={800}
      alt={alt}
      format="webp"
    />
  );
};

interface Props {
  src: string;
  alt: string;
  active: boolean;
}

export default TwinImage;
