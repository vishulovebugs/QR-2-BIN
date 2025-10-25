import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/green.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar.jsx'
import Home from './Component/Home/Home.jsx'
import Solution from './Component/Solution/Solution.jsx'
import About from './Component/About/About.jsx'
import Login from './Pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <About />
      <Solution />
      <Home />
      <Routes>
        <Route element={<Navbar />}>

        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
