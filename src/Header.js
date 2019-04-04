import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => (
  <div>
  <Navbar expand="lg" variant="light" bg="light" fixed='top'>
  <Container className='justify-content-end'>
  <BrowserRouter>
  <ul>
  <li><Link to =" /Projects">Projects</Link></li>
  <li><Link to =" /About">About</Link></li>
  </ul>
  </BrowserRouter>
  </Container>
</Navbar>;
</div>
);

export default Header;
