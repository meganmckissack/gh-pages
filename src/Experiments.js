import React from "react";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import BioImage from './img/Megan_McKissack.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import Footer from './footer';



const About = () => (
    <React.Fragment>
    <Header />
  <div className='wrapper'>
    <img src={BioImage} className='bio-image'/>
    <div className='bio-text'>
    <p>Megan Mckissack is a frontend developer interested in open data,
       data visualization, and emerging technology.
    </p>
    </div>
    </div>
    <Footer />
    </React.Fragment>
);

export default About;