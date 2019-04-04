import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import FrontPage from './FrontPage';
import About from './About';



const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={FrontPage}/>
    <Route path='/Projects' component={Projects}/>
    <Route path='/About' component={About}/>
  </Switch>
  </BrowserRouter>
);

export default Routes;
