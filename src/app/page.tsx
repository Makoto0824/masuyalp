import Header from '../components/Header';
import Hero from '../components/Hero';
import Concept from '../components/Concept';
import Menu from '../components/Menu';
import Interior from '../components/Interior';
import Reviews from '../components/Reviews';
import Access from '../components/Access';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <Concept />
        <Menu />
        <Interior />
        <Reviews />
        <Access />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
