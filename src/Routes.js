import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import FrontPage from './FrontPage';
import About from './About';



const Routes = () => (
  <HashRouter>
  <Switch>
    <Route exact path='/' component={FrontPage}/>
    <Route path='/Projects' component={Projects}/>
    <Route path='/About' component={About}/>
  </Switch>
  </HashRouter>
);

export default Routes;
