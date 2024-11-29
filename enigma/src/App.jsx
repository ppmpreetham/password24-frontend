import { useState } from 'react'
import './App.css'
import Hamburger from './components/hamburger'
import Footer from './components/footer'
import MovableSquare from './components/cursor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovableSquare />
      <Hamburger />
      <div className='text-4xl font-calcio text-left px-4'>ENIGMA</div>
      <Footer />
    </>
  )
}

export default App
