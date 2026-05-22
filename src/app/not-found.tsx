import FuzzyText from '@/components/FuzzyText';
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center gap-8">
      <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover>
        404
      </FuzzyText>
      <Link href="/" className="text-white underline">
        Go Home
      </Link>
    </section>
  );
};

export default NotFound;
