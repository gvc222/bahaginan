import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Impact from './pages/Impact';
import Involved from './pages/Involved';
import News from './pages/News';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/impact" element={<Impact />}/>
        <Route path="/get-involved" element={<Involved />}/>
        <Route path="/news-and-events" element={<News />}/>
        <Route path="/resources" element={<Resources />}/>
        <Route path="/about-us" element={<About />}/>
        <Route path="/contact-us" element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;
