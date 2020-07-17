import React from 'react';
import BodyClassName from 'react-body-classname';
import About from './About';
import Projects from './Projects';
import Experiments from './Experiments';
import SidebarNav from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';



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
              <Projects/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}


function Home() {
  return (
       <BodyClassName className="dark-mode">
        <div>
        <SidebarNav />
      </div>
      </BodyClassName>
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