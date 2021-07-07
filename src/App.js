import Globals from './abstracts/Globals';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Cta from './components/Cta';

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
    </>
  );
}

export default App;
