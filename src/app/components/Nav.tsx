'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="sticky px-4 py-10 bg-white top-0 z-50 transition-all duration-300 
            data-[scrolled=true]:border-b data-[scrolled=true]:border-gray-200 
            data-[scrolled=true]:shadow-sm data-[scrolled=true]:py-6"
      data-scrolled={scrolled}
    >
      <div className="section px-2 py-0 flex items-center justify-between">
        <Link
          href="/"
          onClick={() => handleNavClick('home')}
          title="VividMindGames"
          className="flex items-center gap-2 cursor-pointer"
        >
          <Image
            width={40}
            height={40}
            src="/logo.jpeg"
            alt="Logo"
            className={`${scrolled ? 'w-8 h-8' : 'w-10 h-10'} transition-all duration-300 rounded-sm`}
          />
          <p
            className={`${scrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} transition-all duration-300 text-primary font-header font-bold`}
          >
            VividMind Games
          </p>
        </Link>
        <div>
          <FaHamburger
            onClick={() => setIsOpen(true)}
            className=" md:hidden text-xl cursor-pointer"
          />
          <nav
            className={`${isOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-0 transition-all tansition-discreter absolute z-40 md:relative inset-0 h-screen md:h-auto bg-white grid place-items-center`}
          >
            <FaXmark
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-2xl md:hidden"
            />
            <ul
              className={`flex flex-col md:flex-row items-center gap-12  ${scrolled ? 'text-md' : 'text-lg'} transition-all duration-300 *:cursor-pointer *:relative *:hover:before:h-0.5 *:hover:before:w-full *:hover:before:bg-primary *:hover:before:content-[''] *:pb-1 *:hover:before:bottom-0 *:hover:before:absolute *:hover:text-primary *:hover:font-bold *:transition-all`}
            >
              <li onClick={() => handleNavClick('home')}>
                <Link href="/">Home</Link>
              </li>
              <li
                className={`${pathname !== '/' && 'hidden'}`}
                onClick={() => handleNavClick('featured')}
              >
                <Link href="/">Featured Games</Link>
              </li>
              <li
                className={`${pathname !== '/' && 'hidden'}`}
                onClick={() => handleNavClick('contact')}
              >
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
