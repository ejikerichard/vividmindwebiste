'use client';

import FuzzyText from '@/components/FuzzyText';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary text-white">
        <div className="hidden px-6 py-16 md:px-12 md:py-24 md:flex justify-center">
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover
            fontSize={'48px'}
            className="text-2xl!"
          >
            VIVIDMIND GAMES
          </FuzzyText>
        </div>
      </div>
      <div className="flex items-center justify-between section px-0 py-6 text-center text-sm text-gray-500">
        <div>
          &copy; {new Date().getFullYear()} VividMind Games. All rights
          reserved.
        </div>
        <div>
          <Link
            href="/privacy"
            className="hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
