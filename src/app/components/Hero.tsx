'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const basePositionX = useMotionValue(0);
  const basePositionY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const smoothX = useSpring(basePositionX, springConfig);
  const smoothY = useSpring(basePositionY, springConfig);

  const layer1X = useTransform(smoothX, [-1, 1], [15, -15]);
  const layer1Y = useTransform(smoothY, [-1, 1], [15, -15]);

  const layer2X = useTransform(smoothX, [-1, 1], [35, -35]);
  const layer2Y = useTransform(smoothY, [-1, 1], [35, -35]);

  const layer3X = useTransform(smoothX, [-1, 1], [60, -60]);
  const layer3Y = useTransform(smoothY, [-1, 1], [60, -60]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);

    basePositionX.set(normX);
    basePositionY.set(normY);
  };

  const handleMouseLeave = () => {
    basePositionX.set(0);
    basePositionY.set(0);
  };

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
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-[55vh] min-[414px]:h-[55vh] xl:h-auto perspective-normal mt-16 lg:mt-0"
      >
        <motion.div
          style={{
            x: layer3X,
            y: layer3Y,
          }}
          className="absolute top-0 left-1/3 lg:-top-44 lg:left-1/2 col-start-4 row-start-1 xl:col-start-3 xl:row-start-1 skew-1 xl:translate-z-12 rotate-x-0 backface-hidden transform-3d group-hover:skew-0"
        >
          <div>
            <Image
              src="/images/hero/hero-1.png"
              alt="Hero Image"
              width={140}
              height={160}
              className="object-contain w-60 h-60"
            />
          </div>
          <motion.div
            style={{
              x: layer1X,
              y: layer1Y,
            }}
            className="absolute left-1/2 top-0 rotate-20 -translate-x-1/2 w-24 xl:w-28 h-38 xl:h-42 -z-10 rounded-full bg-[url('/images/hero-bg1.jpeg')] transition-all duration-300"
          ></motion.div>
        </motion.div>

        <motion.div
          style={{
            x: layer2X,
            y: layer2Y,
          }}
          className="absolute -left-10 lg:-top-14 lg:left-24 col-start-2 row-start-1 xl:col-start-2 xl:row-start-2 skew-1 translate-z-12 rotate-x-0"
        >
          <Image
            src="/images/hero/hero-2.png"
            alt="Hero Image"
            width={120}
            height={140}
            className="object-contain w-60 h-60"
          />
          <motion.div
            style={{
              x: layer1X,
              y: layer1Y,
            }}
            className="absolute bottom-0 left-1/2 -rotate-20 -translate-x-1/2 translate-y-4 w-32 h-28 xl:w-40 xl:h-32 -z-10 rounded-full bg-[url('/images/hero-bg2.jpeg')]"
          ></motion.div>
        </motion.div>

        <motion.div
          style={{
            x: layer2X,
            y: layer2Y,
          }}
          className="absolute top-48 right-4 lg:top-16 lg:right-0 col-start-2 row-start-3 xl:col-start-4 xl:row-start-3 skew-1 translate-z-12 rotate-x-0"
        >
          <Image
            src="/images/hero/hero-3.png"
            alt="Hero Image"
            width={128}
            height={160}
            className="object-contain w-48 h-48"
          />
          <motion.div
            style={{
              x: layer1X,
              y: layer1Y,
            }}
            className="absolute bottom-0 left-1/2 -rotate-20 xl:-translate-x-7 -translate-y-4 w-20 h-32 xl:w-28 xl:h-42 -z-10 rounded-full bg-[url('/images/hero-bg3.jpeg')]"
          ></motion.div>
        </motion.div>

        <motion.div
          style={{
            x: layer2X,
            y: layer2Y,
          }}
          className="max-w-max absolute -bottom-10 min-[414px]:bottom-10 lg:relative lg:-bottom-40 xl:left-1/2 col-start-3 col-span-2 md:col-span-1 xl:col-start-4 row-start-3 xl:row-start-2 translate-z-12 rotate-x-0 -mt-16 ml-8 xl:mt-0 xl:ml-0"
        >
          <Image
            src="/images/hero/hero-4.png"
            alt="Hero Image"
            width={270}
            height={360}
            className="object-contain w-44 h-44"
          />
          <motion.div
            style={{
              x: layer1X,
              y: layer1Y,
            }}
            className="absolute bottom-0 left-0 -rotate-20 w-32 h-28 -z-10 rounded-full bg-[url('/images/hero-bg4.jpeg')]"
          ></motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
