import { useState } from 'react';
import './App.css';
import Hamburger from './components/hamburger';
import EnigmaCard from './components/EnigmaCard';
import Footer from './components/footer';
import MovableSquare from './components/cursor';
import BackgroundEffect from './components/background-hover';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <MovableSquare /> */}
      <Hamburger />
      <EnigmaCard/>
      <Footer />
      {/* <BackgroundEffect /> */}
    </>
  );
}

export default Home;
