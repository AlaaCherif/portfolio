import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: Props) {
  return (
    <div className='pt-20'>
      <div className='mb-20'>
        <h1 className='text-5xl'>{title}</h1>
      </div>
      {children}
    </div>
  );
}
