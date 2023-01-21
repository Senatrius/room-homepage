import { useState } from 'react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className='absolute w-full'>
      <nav className='relative mx-auto flex w-full items-center justify-center py-12 md:justify-start md:p-14 lg:p-16'>
        <button
          id='menu'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='absolute left-0 z-10 ml-[6.75%] md:hidden'
          type='button'
          aria-label='Mobile menu'>
          <img
            src={isMenuOpen ? './icon-close.svg' : './icon-hamburger.svg'}
            alt=''
          />
        </button>
        <img
          width='62'
          height='14'
          src='./logo.svg'
          alt='Room logo'
        />
        <ul
          aria-labelledby='menu'
          aria-expanded={isMenuOpen}
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } absolute inset-0 items-center justify-end gap-6 bg-white px-[6.75%] xs:gap-8 md:relative md:ml-14 md:flex md:justify-start md:bg-transparent md:px-0`}>
          {['home', 'shop', 'about', 'contact'].map((link, idx) => (
            <li key={idx}>
              <a
                className='relative text-nav text-black after:absolute after:-bottom-1 after:left-1/2 after:hidden after:h-0.5 after:w-1/2 after:-translate-x-1/2 after:bg-black after:content-[""] hover:after:inline md:text-white md:after:bg-white'
                href='#'>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
