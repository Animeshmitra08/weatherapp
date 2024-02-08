import { useState } from 'react'
import './App.css';

import Navbar from './components/Navbar';
import Landing from './Pages/landing';
import { Route, Routes } from 'react-router-dom';
import Locations from './Pages/Locations';
import About from './Pages/About';

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
