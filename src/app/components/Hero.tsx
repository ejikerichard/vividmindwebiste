'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const Hero = () => {
  return (
    <header className="section min-h-[86vh] grid grid-cols-1 lg:grid-cols-2 items-center place-content-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring' }}
        className="text-header-small md:text-header-large [&>span]:text-secondary"
      >
        We believe in creating <span>meaninful experiences</span> that resonate
        with <span>players</span>.
      </motion.h1>
      <div className="group grid grid-cols-6 grid-rows-3 xl:grid-rows-4 perspective-normal mt-16 lg:mt-0">
        <div className="relative col-start-4 row-start-1 xl:col-start-3 xl:row-start-1 skew-1 xl:translate-z-12 rotate-x-0 backface-hidden transform-3d group-hover:skew-0 group-hover:translate-y-1 group-hover:-translate-x-1 group-hover:rotate-x-1 transition-all duration-300 hover:animate-bounce">
          <Image
            src="/images/hero1.webp"
            alt="Hero Image"
            width={140}
            height={160}
            className="object-contain w-24 h-28 xl:w-28 xl:h-32"
          />
          <div className="absolute top-0 left-3 right-2 group-hover:rotate-12 rotate-20 -translate-y-7 w-24 xl:w-28 h-38 xl:h-42 -z-10 rounded-full bg-[url('/images/hero-bg1.jpeg')] transition-all duration-300"></div>
        </div>
        <div className="relative col-start-2 row-start-1 xl:col-start-2 xl:row-start-2 skew-1 translate-z-12 rotate-x-0 group-hover:translate-y-3 group-hover:-translate-x-3 group-hover:rotate-x-6 transition-all duration-300 hover:animate-bounce">
          <Image
            src="/images/hero2.webp"
            alt="Hero Image"
            width={120}
            height={140}
            className="object-contain w-28 h-24 xl:w-32 xl:h-28"
          />
          <div className="absolute top-0 left-1 right-2 -rotate-20 -translate-x-7 translate-y-4 w-32 h-28 xl:w-40 xl:h-32 -z-10 rounded-full bg-[url('/images/hero-bg2.jpeg')]"></div>
        </div>
        <div className="relative col-start-2 row-start-3 xl:col-start-4 xl:row-start-3 skew-1 translate-z-12 rotate-x-0 group-hover:-translate-y-3 group-hover:-translate-x-3 group-hover:rotate-x-6 transition-all duration-300 hover:animate-bounce">
          <Image
            src="/images/hero3.png"
            alt="Hero Image"
            width={140}
            height={160}
            className="object-contain"
          />
          <div className="absolute top-0 left-1 right-2 -rotate-20 xl:-translate-x-7 -translate-y-4 w-20 h-32 xl:w-28 xl:h-42 -z-10 rounded-full bg-[url('/images/hero-bg3.jpeg')]"></div>
        </div>
        <div className="relative col-start-3 col-span-2 md:col-span-1 xl:col-start-4 row-start-3 xl:row-start-2 translate-z-12 rotate-x-0 group-hover:animate-bounce -mt-16 ml-8 xl:mt-0 xl:ml-0">
          <Image
            src="/images/hero4.png"
            alt="Hero Image"
            width={170}
            height={160}
            className="object-contain w-32 h-32"
          />
          <div className="absolute top-0 left-1 right-2 -rotate-20 xl:translate-x-7 xl:-translate-y-4 w-32 h-28 -z-10 rounded-full bg-[url('/images/hero-bg4.jpeg')]"></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
