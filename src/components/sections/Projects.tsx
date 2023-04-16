import AnimateOnScroll from '../wrappers/AnimateOnScroll';
import github from '../../assets/github-mark-white.svg';
import sbnf from '../../assets/sbnf.jpg';
import Section from '../wrappers/Section';

export default function Projects() {
  return (
    <Section title='Projects'>
      <AnimateOnScroll>
        <div className='flex flex-col-reverse md:flex-row justify-center gap-20 items-center md:items-start'>
          <div className='max-w-md'>
            <div className='flex items-center justify-between  mb-5'>
              <h1 className='text-4xl '>SBNF Motors</h1>
              <img
                className='transition-all hover:scale-110 cursor-pointer'
                width={30}
                height={30}
                src={github}
              />
            </div>
            <div className='text-2xl tracking-wider'>
              Web application for a chinese car dealership
              <br />
              <br />
              Astethic design and smooth user experience
              <br />
              <br />
              Admin interface and full control over the website
            </div>
          </div>
          <img
            className='md:max-w-1/2 grayscale hover:grayscale-0 transition-all duration-200'
            src={sbnf}
            alt='project image'
          />
        </div>
      </AnimateOnScroll>
    </Section>
  );
}
