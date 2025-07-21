
import { useState, useEffect, useRef, type RefObject } from 'react';

export const useOnScreen = <T extends Element>(options?: IntersectionObserverInit): [RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        // We can unobserve after it's visible if we don't need to track it further
        if (ref.current) {
            observer.unobserve(ref.current);
        }
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if(ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};
