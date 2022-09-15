import React from 'react';
import Map from '../src/components/Map/Map';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {

  return (
    <div className="App">
    <Header />
    <Hero />
    <Map />
    </div>
  );
}

export default App;
