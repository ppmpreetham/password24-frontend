import { useState } from 'react';
import './App.css';
import Hamburger from './components/hamburger';
import Footer from './components/footer';
import Join from './components/join';
import MovableSquare from './components/cursor';
import BackgroundEffect from './components/background-hover';
import Timeline from './components/timeline';
function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className='py-2'> 
      {/* <MovableSquare /> */}
      <div className="flex justify-between w-full px-4">
        <div className='text-5xl font-calcio text-left pt-3 z-20'>ENIGMA</div>
        <Hamburger className='right-0'/>
      </div>
      <Join className='z-50'/>
      <Timeline className='w-full z-1'/>
      <Footer />
      {/* <BackgroundEffect /> */}
    </div>
  );
}

export default Home;