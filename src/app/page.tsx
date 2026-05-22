import Footer from './components/Footer';
import Contact from './components/Contact';
import Philosophy from './components/Philosophy';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Nav from './components/Nav';

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
