import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Login from './Pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Navbar/>}>
          
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
