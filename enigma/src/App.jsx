import { useState } from 'react'
import './App.css'
import Hamburger from './components/hamburger'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hamburger />
      <div className='text-4xl font-calcio text-left px-4'>ENIGMA</div>
      <Footer />
    </>
  )
}

export default App
