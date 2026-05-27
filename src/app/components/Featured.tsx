'use client';

import { FaGooglePlay, FaItchIo, FaSteam } from 'react-icons/fa6';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const Featured = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="section centered-section"
      id="featured"
    >
      <h2 className="text-2xl text-subheader-small md:text-subheader font-bold">
        Featured Games
      </h2>
      <p className="max-w-[65ch]">
        We craft games we’re deeply proud of and obsessed with — from epic
        adventures to hardcore shooters. But nothing beats our true love:
        clever, addictive puzzle games.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        <div>
          <Image
            src="/images/run-punch.png"
            height={198}
            width={352}
            alt="run punch image"
            className="w-full md:w-88 lg:w-full h-60.5"
          />
          <div className="mt-3 text-left">
            <h3 className="text-lg text-secondary">Run Punch</h3>
            <p className="text-sm text-accent">
              A thrilling arcade experience where you control a determined
              character in a fast-paced environment.
            </p>
          </div>
          <div className="text-2xl text-primary flex items-center gap-3 mt-3">
            <Link
              href="https://vividmindgames.itch.io/punchrun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaItchIo />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.VividmindGames.RunPunch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGooglePlay />
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/images/battle-crown.png"
            alt="run battle crown image"
            className="w-full md:w-88 lg:w-full h-60.5"
            height={198}
            width={352}
          />
          <div className="mt-3 text-left">
            <h3 className="text-lg text-secondary">Crown Battle</h3>
            <p className="text-sm text-accent">
              An intense battle royale game where players fight to be the last
              one standing and claim the crown.
            </p>
          </div>
          <div className="text-2xl text-primary flex items-center gap-3 mt-3">
            <Link
              href="https://store.steampowered.com/app/4581360/Battle_For_Crown/?beta=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSteam />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Featured;
