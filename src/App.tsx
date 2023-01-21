import { About } from './components/About';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className='font-spartan'>
      <Navigation />
      <Hero />
      <About />
    </div>
  );
}

export default App;
