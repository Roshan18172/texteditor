import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <NavBar appName="Text Editor"/>
    <TextForm desc="Write your text here..."/>
    
    </>
  );
}

export default App;
