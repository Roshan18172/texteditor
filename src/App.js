// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Router>
      <NavBar appName="Text Editor" />
      <Routes>
        <Route path="/" element={<TextForm desc="Enter the text to analyze below" />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
