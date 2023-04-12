import AnimatedHero from './components/AnimatedHero';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <div className='dark'>
      <div className='bg-white text-black dark:bg-black dark:text-white w-full min-h-screen'>
        <Navigation />
        <div className='mx-20 p-8'>
          <AnimatedHero />
        </div>
      </div>
    </div>
  );
}
