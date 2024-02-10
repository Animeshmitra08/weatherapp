import './App.css';

import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Locations from './Pages/Locations';
import About from './Pages/About';
import Hero from './Pages/Hero';

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
