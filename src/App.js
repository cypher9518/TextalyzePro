import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import TextArea from './components/TextArea';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode= () =>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "grey"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <div className="container">
      <Routes>
  <Route path="/about" element={<About />} />
  <Route path="/" element={<TextArea heading="Enter Text To Analyze" mode={mode} />} />
</Routes>
    {/*<TextArea heading="Enter Text To Analyze"mode={mode}/>*/}
    </div>
    </Router>
    <Footer year="2023"/>


    
    </>
  );
}

export default App;
