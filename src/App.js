import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Impact from './pages/Impact';
import Involved from './pages/Involved';
import News from './pages/News';
import Resources from './pages/Resources';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/impact" component={Impact}/>
        <Route path="/get-involved" component={Involved}/>
        <Route path="/news-and-events" component={News}/>
        <Route path="/resources" component={Resources}/>
        <Route path="/about-us" component={About}/>
        <Route path="/contact-us" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
