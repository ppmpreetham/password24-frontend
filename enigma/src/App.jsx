import { useState } from 'react'
import './App.css'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-4xl font-calcio'>ENIGMA</div>
      <Footer />
    </>
  )
}

export default App
