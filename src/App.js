import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import './App.css';
import './styles.css';

function App() {
  return (
    <Router basename="/artsite">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
