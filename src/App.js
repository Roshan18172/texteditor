import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('primary');
  const [alert, setAlert] = useState(null);
  // This function sets an alert message
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  // This function toggles the mode between light and dark
  const toggleMode = () => {
    setMode(mode === 'primary' ? 'dark' : 'primary');
    document.body.style.backgroundColor = mode === 'primary' ? '#343a40' : '#f8f9fa';
    document.body.style.color = mode === 'primary' ? '#fff' : '#000';
    if (mode === 'primary') {
      showAlert("Dark mode has been enabled", "success");
    } else {
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
    <Router>
      <NavBar appName="Text Editor" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm desc="Enter the text to analyze below" showAlert={showAlert} />} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
      <Footer mode={mode} />
    </Router>
    
    </>
  );
}

export default App;
