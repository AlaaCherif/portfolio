export default function Navigation() {
  return (
    <div className='w-100 text-3xl flex flex-col gap-10 md:flex-row align-center justify-between p-4 md:p-6 lg:p-8 mx-20'>
      <div>Alaa Cherif</div>
      <div className='flex align-center justify-around flex-col md:flex-row gap-10'>
        <a className='group transition-all duration-300 ease-in-out' href='#'>
          <span className='bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
            Projects
          </span>
        </a>
        <a className='group transition-all duration-300 ease-in-out' href='#'>
          <span className='bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
            About
          </span>
        </a>

        <a href='#'>
          <span className='border-4 py-2 px-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 ease-in-out'>
            Contact
          </span>
        </a>
      </div>
    </div>
  );
}
