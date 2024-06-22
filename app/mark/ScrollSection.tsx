import { useEffect, useRef, useState, FC, ReactNode } from 'react';

const ScrollSection = ({ children: Content, threshold, rootMargin }: Props) => {
  const { root, isVisible } = useScrollObserver({
    rootMargin,
    threshold,
  });

  return (
    <div
      data-scroll={isVisible ? 'visible' : 'hidden'}
      ref={root}
      className="group"
    >
      {Content && typeof Content === 'function' ? (
        <Content visible={isVisible} />
      ) : Content ? (
        Content
      ) : null}
    </div>
  );
};

// Can we use callback refs to register an arbitrary number of elements?
const useScrollObserver = (options?: ScrollObserverOptions) => {
  const {
    rootMargin: { top, right, bottom, left },
    threshold,
  } = getDefaultedOptions(options);

  const observer = useRef<IntersectionObserver | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

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
        rootMargin: `-${top}px -${right}px -${bottom}px -${left}px`,
        threshold,
      },
    );
    if (root.current) {
      observer.current.observe(root.current);
    }
    return () => {
      observer.current?.disconnect();
    };
  }, [threshold, top, right, bottom, left]);

  const register = (element: Element) => {
    // TODO how does this handle when a new observer is created?
    observer.current?.observe(element);

    return () => {
      observer.current?.unobserve(element);
    };
  };

  return { root, isVisible, register };
};

const getDefaultedOptions = (options?: Partial<ScrollObserverOptions>) => ({
  threshold: options?.threshold ?? 0,
  rootMargin: {
    top: options?.rootMargin?.top ?? 0,
    bottom: options?.rootMargin?.bottom ?? 0,
    left: options?.rootMargin?.left ?? 0,
    right: options?.rootMargin?.right ?? 0,
  },
});

interface ScrollObserverOptions {
  threshold?: number;
  rootMargin?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}

interface Props {
  children?: ReactNode | FC<{ visible: boolean }>;
  threshold?: number;
  rootMargin?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}

export default ScrollSection;
