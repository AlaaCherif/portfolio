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
      className={`transition-opacity duration-700 ease-in opacity-${
        show ? '100' : '0'
      } `}
      ref={ref}
    >
      {children}
    </div>
  );
}
