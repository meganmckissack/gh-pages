import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add (
  faGithub, faInstagram, faLinkedin);

const Footer = () => (
  <div>
  <Navbar expand="lg" variant="light" bg="light" fixed='bottom'>
  <Container className='justify-content-end'>
    <Navbar.Brand href="https://github.com/meganmckissack">
    <FontAwesomeIcon icon={faGithub} />
    </Navbar.Brand>
    <Navbar.Brand href='https://www.instagram.com/meganmckissack/'>
    <FontAwesomeIcon icon={faInstagram} />
    </Navbar.Brand>
    <Navbar.Brand href='https://www.linkedin.com/in/meganmckissack/'>
    <FontAwesomeIcon icon={faLinkedin} />
    </Navbar.Brand>
  </Container>
</Navbar>
  </div>
);

export default Footer;

