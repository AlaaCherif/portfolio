import { useState } from 'react';

const words = ['code 🚀', 'value ➕', 'growth 📈'];

export default function AnimatedHero() {
  const [word, setWord] = useState<string>(words[0]);
  const nextWord = () => {
    setWord(prev => {
      const currentIndex = words.indexOf(prev);
      return words[currentIndex + 1] || words[0];
    });
  };
  //code value
  return (
    <div className='text-9xl pt-20 leading-relaxed'>
      <div>Striving to make your</div>
      <div>
        <span>ideas into</span>
        <h1 className='mb-2 text-9xl md:text-9xl'>
          <span className='relative'>
            <span className='h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent'>
              {word}
            </span>
            <span
              onAnimationEnd={() => {
                const element = document.querySelector('#toAnimate');
                element?.classList.remove('animate-type');
                void (element as any)?.offsetWidth;
                nextWord();
                element?.classList.add('animate-type');
              }}
              id='toAnimate'
              className='cursor absolute -bottom-0 left-0 -top-1 inline-block bg-black w-full will-change animate-type'
            ></span>
          </span>
        </h1>
      </div>
    </div>
  );
}
