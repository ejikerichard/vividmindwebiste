import Contact from './components/Contact';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import MouseParallax from './components/blob';

export default function Home() {
  return (
    <main>
      <Hero />
      <MouseParallax />
      <Featured />
      <Philosophy />
      <Contact />
    </main>
  );
}
