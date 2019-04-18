import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import About from './About';
import Projects from './Projects';
import Footer from './footer';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
      <Footer />
      <Header />
      <HashRouter>
        <Route exact path='/' component={FrontPage}/>
        <Route path='/Projects' component={Projects}/>
        <Route path='/About' component={About}/>
      </HashRouter>
      </div>
    );
  }
}

export default App;
