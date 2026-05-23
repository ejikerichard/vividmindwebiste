import Contact from './components/Contact';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Philosophy />
      <Contact />
    </main>
  );
}
