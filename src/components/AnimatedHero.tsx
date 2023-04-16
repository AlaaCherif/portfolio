import { useState } from 'react';

const words = ['code 🚀 ', 'value ➕ ', 'growth 📈 '];

export default function AnimatedHero() {
  const [word, setWord] = useState<string>(words[0]);
  const nextWord = () => {
    setWord(prev => {
      const currentIndex = words.indexOf(prev);
      return words[currentIndex + 1] || words[0];
    });
  };
  const handleAnimationEnd = () => {
    const element = document.querySelector('#toAnimate');
    element?.classList.remove('animate-type');
    void (element as any)?.offsetWidth;
    nextWord();
    element?.classList.add('animate-type');
  };
  return (
    <>
      <div className='text-5xl md:text-8xl xl:text-9xl pt-20 leading-loose'>
        <div>Aiming to turn your ideas</div>
        <div>
          <h1 className='mb-2 overflow-hidden'>
            into{' '}
            <div className='inline md:inline lg:hidden'>
              <br />
            </div>
            <span className='relative bg-black text-white dark:bg-white dark:text-black'>
              <span className='h-20 overflow-x-hidden whitespace-nowrap text-brand-accent'></span>
              {word}
              <span
                onAnimationEnd={handleAnimationEnd}
                id='toAnimate'
                className='absolute -bottom-0 left-0 -top-1 inline-block bg-white dark:bg-black w-full will-change animate-type'
              ></span>
            </span>
          </h1>
          {/* <h1 className='block sm:hidden'>Code</h1> */}
        </div>
      </div>
      <div className='pt-20 text-3xl tracking-widest leading-relaxed'>
        <div>Hello, My name is Alaa Eddine Cherif</div>
        <div>I'm a passionnate Full-Stack Software Developer </div>
        <div>
          I study software engineering at{' '}
          <a
            className='group transition-all duration-300 ease-in-out'
            href='http://www.insat.rnu.tn'
            target='_blank'
          >
            <span className='text-gray-500 bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              INSAT
            </span>
          </a>
        </div>
      </div>
      <div className='mt-20 bg-white w-full' style={{ height: '2px' }}></div>
    </>
  );
}
