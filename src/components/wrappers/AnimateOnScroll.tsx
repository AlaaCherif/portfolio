import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimateOnScroll({ children, className }: Props) {
  const { ref, inView } = useInView();
  const [show, setShow] = useState<boolean>(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  return (
    <div
      className={`transition-all duration-1000 ease-in ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
      ref={ref}
    >
      {children}
    </div>
  );
}
