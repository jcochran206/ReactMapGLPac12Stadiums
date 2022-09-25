import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Hero />
      <Routes>
        <Route path='/' element=""/>
        <Route path='/about' element=''/>
        <Route path='/history' element="" />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
