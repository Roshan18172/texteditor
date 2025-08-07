// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('primary');
  const toggleMode = () => {
    setMode(mode === 'primary' ? 'dark' : 'primary');
    document.body.style.backgroundColor = mode === 'primary' ? '#343a40' : '#f8f9fa';
    document.body.style.color = mode === 'primary' ? '#fff' : '#000';
  };
  return (
    <>
    <Router>
      <NavBar appName="Text Editor" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<TextForm desc="Enter the text to analyze below" />} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
