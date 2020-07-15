import React from "react";
import Header from './Header';
import Footer from './footer';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import civicBudget from './img/civic-17-budget-web.jpg';
import civicHome from './img/civic-17-homelessness-web.jpg';
import civicER from './img/civic-17-er-web.jpg';
import civicHousing from './img/civic-17-housing-web.jpg';
import civicTransport from './img/civic-17-transportation-web.jpg';
import demolitionMap from './img/demolition-map-web.png';

const cardDeckStyle ={
   width: '90%',
   padding: '2em',
   margin: '0 auto'
};

const Projects = () => (
  <div>
    <Header />
  <CardDeck style={cardDeckStyle}>
  <div>
  <h2>Hack Oregon</h2>
  <p>
   During my time at Hack Oregon, I was project lead for developing and creating an open data platform,
   CIVIC, along with five interactive data-visualization-driven web apps and open APIs created by five teams of talented volunteers,
   created on the platform over a nine-month development cycle.
   </p>
   <p>
   I developed process documentation, maintained volunteer and student coordination and communication, managed Amazon Web Services, worked on front-end and
   data visualization development, using React.js, node.js, react storybook, d3.js, css modules, learna.js as well as handled business operations and bookkeeping.
   </p>
   </div>
      <Card>
        <Card.Img variant="top" src={civicBudget} />
        <Card.Body>
          <Card.Link href="http://2017.civicpdx.org/budget">Civic Budget Project</Card.Link>
          <Card.Text>
            Worked with the City of Portland to visualize the city's budget
          </Card.Text>
        </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={civicHome} />
          <Card.Body>
            <Card.Link href="http://2017.civicpdx.org/homelessness">Civic Homelessness Project</Card.Link>
            <Card.Text>
              Visualizing a census of the Portland homelessness population
            </Card.Text>
          </Card.Body>
          </Card>
          <Card>
          <Card.Img variant="top" src={civicER} />
            <Card.Body>
            <Card.Link href="http://2017.civicpdx.org/emergency">Civic Emergency Response Project</Card.Link>
              <Card.Text>
                An exploration of factors affecting Porltand's emergency response times
              </Card.Text>
            </Card.Body>
            </Card>
    </CardDeck>
    <CardDeck style={cardDeckStyle}>
            <Card>
            <Card.Img variant="top" src={civicHousing} />
            <Card.Body>
              <Card.Link href="http://2017.civicpdx.org/housing">Civic Housing Project</Card.Link>
              <Card.Text>
                Visualizing Portland neighborhood demographics and housing affordability
              </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={civicTransport} />
            <Card.Body>
              <Card.Link href="http://2017.civicpdx.org/transportation">Civic Transportation Project</Card.Link>
              <Card.Text>
                An exploration of Porltand's traffic incidents by mode of transportation
              </Card.Text>
            </Card.Body>
            </Card>
    </CardDeck>
    <CardDeck style={cardDeckStyle}>
    <div>
    <h2>Personal Projects</h2>
     </div>
     <div>
        <Card>
          <Card.Img variant="top" src={demolitionMap} />
          <Card.Body>
            <Card.Link href="https://github.com/meganmckissack/portand-demolition-map">Porltand Demolotion Map</Card.Link>
            <Card.Text>
            Map practice from Web Cartogrpahy workshop
            Maps residential demolition permits by neighborhoods in Porltland using Portland Maps Open Data and open source QGIS software, Leaflet, Open Street Map, and Stamen map tiles.
            Green value represents more or less permits by neighborhood and clicking on dots brings up tooltip with permit data.
            </Card.Text>
          </Card.Body>
          </Card>
            </div>
        </CardDeck>
        <Footer />
    </div>
);

export default Projects;
