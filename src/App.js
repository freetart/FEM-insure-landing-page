import Globals from './abstracts/Globals';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Tag from './components/Tag';

// TODO: add tag | make responsive | add aos | add preloader | add toggle menu | add mobile menu

function App() {
  return (
    <>
      <Globals />
      <Navbar />
      <Hero />
      <main>
        <Features />
        <Cta />
      </main>
      <Footer />
      <Tag />
    </>
  );
}

export default App;
