'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const Philosophy = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="section"
      id="philosophy"
    >
      <div className="centered-section">
        <h2 className="text-2xl text-subheader-small md:text-subheader font-bold">
          Our Philosophy
        </h2>
        <p className="max-w-[65ch]">
          We believe games are more than entertainment. It is humanity&apos;s
          portal to new realities, emotional journeys, and transformative
          experiences that stay with players long after they put down the
          controller.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 place-items-center lg:place-items-stretch gap-16 lg:gap-2 xl:max-w-[90%] mx-auto">
        <div className="max-w-[35ch] text-center md:justify-self-start">
          <div className="flex justify-center">
            <Image
              src="/images/intelligent.webp"
              alt="intelligent designs"
              className="w-34 h-35 hover:rotate-12 hover:scale-110 transition-transform"
              width={136}
              height={140}
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg text-secondary">Intelligent Designs</h3>
            <p className="text-sm text-accent">
              We craft games with intelligent designs that challenge
              players&apos; minds and ignite their creativity.
            </p>
          </div>
        </div>
        <div className="max-w-[35ch] text-center md:justify-self-end md:-mt-8">
          <div className="flex justify-center">
            <Image
              src="/images/emotion.png"
              alt="emotional resonance"
              className="w-34 h-40 hover:-rotate-12 hover:scale-110 transition-transform"
              width={146}
              height={160}
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg text-secondary">Emotional Resonance</h3>
            <p className="text-sm text-accent">
              Games should move you. We design experiences that create lasting
              emotional connections and memories.
            </p>
          </div>
        </div>
        <div className="max-w-[35ch] text-center lg:-mt-8 md:justify-self-start">
          <div className="flex justify-center">
            <Image
              src="/images/innovation.webp"
              alt="innovation first"
              className="w-42 h-35 hover:rotate-12 hover:scale-110 transition-transform"
              width={136}
              height={140}
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg text-secondary">Innovation First</h3>
            <p className="text-sm text-accent">
              We push boundaries and challenge conventions to create truly
              unique gaming experiences.
            </p>
          </div>
        </div>
        <div className="max-w-[35ch] text-center md:justify-self-end md:-mt-8">
          <div className="flex justify-center">
            <Image
              src="/images/collaboration.png"
              alt="collaborative vision"
              className="w-42 h-35 hover:-rotate-12 hover:scale-110 transition-transform"
              width={156}
              height={140}
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg text-secondary">Collaborative Vision</h3>
            <p className="text-sm text-accent">
              Great games emerge from great partnerships. We work closely with
              publishers and creative talent.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Philosophy;
