import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Story from './routes/Story';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/story" element={<Story />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
