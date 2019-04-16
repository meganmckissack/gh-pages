import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode} from '@fortawesome/free-solid-svg-icons'

library.add(faCode)


const Header = () => (
  <div>
  <Navbar expand="lg" variant="light" bg="light" fixed='top'>
  <Navbar.Brand href="/"><FontAwesomeIcon icon={faCode} /></Navbar.Brand>
  <Container className='justify-content-end'>
  <Navbar.Brand href="#Projects">Projects</Navbar.Brand>
  <Navbar.Brand href="#About">About</Navbar.Brand>
  </Container>
</Navbar>;
</div>
);

export default Header;
