import React from "react";
import Image from 'react-bootstrap/Image';
import HeaderImage from './img/tree-fog.jpeg';
import Container from 'react-bootstrap/Container';

const headerText ={
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  padding: '2em',
  color: 'white',
  textShadow: '1px 1px 2px black'
};

const headerContainer = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'fixed',
  top:'0',
  left:'0',
  minWidth: '100vw',
  minHeight: '100vh',
};

const footerStyle = {

};

const FrontPage = () => (
  <div>
  <Image style={headerContainer} responsive src={HeaderImage} />
  <Container style={headerText}>
  <h1>Megan McKissack</h1>
  <p>Front-end developer and creative coder interested in data visualization</p>
  </Container>
  </div>
);

export default FrontPage;
