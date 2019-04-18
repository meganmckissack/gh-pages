import React from "react";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import BioImage from './img/Megan_McKissack.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const bioStyle ={
  position: 'absolute',
  transform: 'translateY(25%)',
  padding: '1em',
};

const bioText = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: '2em',
};

const About = () => (
  <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image style={bioStyle} src={BioImage} thumbnail />
    </Col>
    <Col xs={12} md={6} style={bioText}>
    <p>Megan Mckissack is a frontend developer interested in open data,
       data visualization, and emerging technology.
    </p>
    </Col>
    </Row>
    </Container>
);

export default About;
