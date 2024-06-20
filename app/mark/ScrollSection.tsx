'use client';
import clsx from 'clsx';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

const ScrollSection = ({
  children,
  threshold,
  classNames,
  nonVisibleClassNames,
}: Props) => {
  const { root, isVisible } = useScrollObserver(threshold);
  return (
    <div
      ref={root}
      className={clsx(classNames, {
        ...(nonVisibleClassNames ? { [nonVisibleClassNames]: !isVisible } : {}),
      })}
    >
      {children}
    </div>
  );
};

// Can we use callback refs to register an arbitrary number of elements?
const useScrollObserver = (threshold: number = 0) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold,
      },
    );
    if (root.current) {
      observer.current.observe(root.current);
    }
    return () => {
      observer.current?.disconnect();
    };
  }, [threshold]);

  return { root, isVisible };
};

interface Props extends PropsWithChildren {
  threshold?: number;
  classNames?: string;
  nonVisibleClassNames?: string;
}

export default ScrollSection;
