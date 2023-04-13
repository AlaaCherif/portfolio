import AnimatedHero from './components/AnimatedHero';
import Navigation from './components/Navigation';
import AnimateOnScroll from './components/wrappers/AnimateOnScroll';

export default function App() {
  return (
    <div className='dark'>
      <div className='bg-white text-black dark:bg-black dark:text-white w-full min-h-screen'>
        <Navigation />
        <div className='mx-10 lg:mx-20 p-8'>
          <AnimatedHero />
          <div className='w-full h-screen'></div>
          <AnimateOnScroll>
            <div className='bg-white w-full h-1/2 text-black'>
              oh mafama chay lena xD
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
