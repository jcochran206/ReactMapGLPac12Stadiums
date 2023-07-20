import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import History from './components/History/History';
import Hero from './components/Hero/Hero';
import Map from './components/Map/Map';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Hero />
      <Map />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/history' element={<History />} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
