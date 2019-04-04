import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import FrontPage from './FrontPage';
import About from './About';
import Projects from './Projects';
import Footer from './footer';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
      <FrontPage />
      <Footer />
      <Header />
      </div>
    );
  }
}

export default App;
