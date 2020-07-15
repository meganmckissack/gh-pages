import React from 'react';
import BgImage from './img/tree-fog.jpeg';
import "./assets/css/theme-1.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FrontPage from './FrontPage';
import About from './About';
import Projects from './Projects';
import Experiments from './Experiments';
import Footer from './footer';
import SidebarNav from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';


const headerText ={
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  padding: '2em',
  color: 'white',
  textShadow: '1px 1px 2px black'
};


function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route path="/Projects">
              <Work />
            </Route>
            <Route path="/Experiments">
              <Lab />
            </Route>
            <Route path="/About">
              <AboutMe />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}


function Home() {
  return (
    <React.Fragment>
      <SidebarNav />
      <Jumbotron style={{ 
        backgroundImage: `url(${BgImage})`, 
        backgroundSize: 'cover' }} fluid>
      </Jumbotron>
      <Footer />
    </React.Fragment>
  );
}
function Work() {
  return <Projects />;
}

function Lab() {
  return <Experiments />;
}

function AboutMe() {
  return <About />;
}

export default App;