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
    <div className='text-5xl md:text-8xl xl:text-9xl pt-20 leading-relaxed'>
      <div>Aiming to turn your ideas</div>
      <div>
        <span></span>
        <h1 className='hidden sm:block mb-2 overflow-hidden'>
          into{' '}
          <div className='inline md:inline lg:hidden'>
            <br />
          </div>
          <span className='relative bg-white text-black'>
            <span className='h-20 overflow-x-hidden whitespace-nowrap text-brand-accent'></span>
            {word}
            <span
              onAnimationEnd={handleAnimationEnd}
              id='toAnimate'
              className='absolute -bottom-0 left-0 -top-1 inline-block bg-black w-full will-change animate-type'
            ></span>
          </span>
        </h1>
        <h1 className='block sm:hidden'>Code</h1>
      </div>
    </div>
  );
}
