import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <h1 className="text-3xl font-bold underline">
  <Navbar />
 Welcome to AlgoManiacZ Club
  </h1>         
    </>
  )
}

export default App
