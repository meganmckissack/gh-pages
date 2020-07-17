import React from "react";
import BodyClassName from 'react-body-classname';
import Header from './Header';
import civicBudget from './img/civic-17-budget-web.jpg';
import civicHome from './img/civic-17-homelessness-web.jpg';
import civicER from './img/civic-17-er-web.jpg';
import civicHousing from './img/civic-17-housing-web.jpg';
import civicTransport from './img/civic-17-transportation-web.jpg';
import civic from './img/web-civic.jpg';
import demoMap from './img/Portland_Demolition_Map.png'; 
import collabLab from './img/collab-lab-smart-list.png';
import vrGallery from './img/PNCA_Student_Gallery.png';
import colorBlock from './img/color-block.png';


const Projects = () => (
  <React.Fragment>
    <BodyClassName className="dark-mode">
<div className="main-wrapper">
	    <section className="cta-section theme-bg-dark py-5">
		    <div className="container text-center single-col-max-width">
			    <h2 className="heading">Work</h2>
          <br></br>
	      </div>
      </section>

      <section className="projects-list px-3 py-5 p-md-5">
       <div className="container">

         <div className="project-cards row isotope">

         <div className="isotope-item col-md-6 mb-5 webapp frontend backend">
           <div className="card project-card">
             <div className="row no-gutters">
               <div className="col-lg-4 card-img-holder">
               <img src={collabLab} className="card-img" alt="portfolio"></img>
               </div>
               <div className="col-lg-8">
                 <div className="card-body">
                 <h5 className="card-title"><a href="https://tcl-7-smart-shopping-list.netlify.app/" className="theme-link">Smart Shopping List</a></h5>
                   <p className="card-text">A predictive list app created with three other developers as part of <a href="https://tcl-7-smart-shopping-list.netlify.app/" className="theme-link">The Collab Lab</a>. We paired over zoom, completely remote over eight weeks.</p>
                   <p className="card-text">Created with React.js, Firebase, Tailwindcss, and Netlify</p>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="isotope-item col-md-6 mb-5 webapp frontend backend">
           <div className="card project-card">
             <div className="row no-gutters">
               <div className="col-lg-4 card-img-holder">
               <img src={vrGallery} className="card-img" alt="portfolio"></img>
               </div>
               <div className="col-lg-8">
                 <div className="card-body">
                 <h5 className="card-title"><a href="https://meganmckissack.github.io/pnca-vr-student-gallery/" className="theme-link">VR Art Gallery</a></h5>
                   <p className="card-text">The PNCA BFA Juried Exhibition got caught in the middle of the COVID-19 shutdown so I created a virtul version the gallery in WebVR so students could show work.</p>
                   <p className="card-text">I had fun experimenting with A-Frame for this project.</p>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="isotope-item col-md-6 mb-5 webapp frontend backend">
           <div className="card project-card">
             <div className="row no-gutters">
               <div className="col-lg-4 card-img-holder">
               <img src={demoMap} className="card-img" alt="portfolio"></img>
               </div>
               <div className="col-lg-8">
                 <div className="card-body">
                 <h5 className="card-title"><a href="https://portland-demolition-map.glitch.me/" className="theme-link">Portland Demolition Map</a></h5>
                   <p className="card-text">Maps residential demolition permits by neighborhoods in Portland</p>
                   <p className="card-text">I used Portland Maps Open Data and open source QGIS software, Leaflet, Open Street Map, and Stamen map tiles. It's hosted on <a href="https://glitch.com/" className="theme-link">Glitch!</a></p>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="isotope-item col-md-6 mb-5 webapp frontend backend">
           <div className="card project-card">
             <div className="row no-gutters">
               <div className="col-lg-4 card-img-holder">
               <img src={colorBlock} className="card-img" alt="portfolio"></img>
               </div>
               <div className="col-lg-8">
                 <div className="card-body">
                 <h5 className="card-title"><a href="https://mmckissack.com/" className="theme-link">Portfolio Site</a></h5>
                   <p className="card-text">This portlfolio site was made using react, a theme modified for react bootstrap, and deployed to github pages.</p>
                 </div>
               </div>
             </div>
           </div>
         </div>


         <div className="project-section mb-5">
					    <h3 className="project-section-title mb-3">Hack Oregon</h3>
					    <p>During my time at Hack Oregon, I was project lead for developing and creating an open data platform, CIVIC, along with five interactive data-visualization-driven web apps and open APIs created by five teams of talented volunteers, created on the platform over a nine-month development cycle.</p>
              <p>I developed process documentation, maintained volunteer and student coordination and communication, managed Amazon Web Services, worked on front-end and data visualization development, using React.js, node.js, react storybook, d3.js, css modules, learna.js as well as handled business operations and bookkeeping.</p>
					</div>

          <div className="isotope-item col-md-6 mb-5 webapp frontend backend">
           <div className="card project-card">
             <div className="row no-gutters">
               <div className="col-lg-4 card-img-holder">
               <img src={civic} className="card-img" alt="portfolio"></img>
               </div>
               <div className="col-lg-8">
                 <div className="card-body">
                 <h5 className="card-title"><a href="http://www.civicpdx.org/" className="theme-link">Civic Platform</a></h5>
                   <p className="card-text">An open data platform featuring five interactive data-driven web apps and open APIs</p>
                   <p className="card-text">We utilized APIs as our backend and a monorepo to house the frontend projects made by the five different teams.</p>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="isotope-item col-md-6 mb-5 webapp frontend backend">
           <div className="card project-card">
             <div className="row no-gutters">
               <div className="col-lg-4 card-img-holder">
               <img src={civicBudget} className="card-img" alt="portfolio"></img>
               </div>
               <div className="col-lg-8">
                 <div className="card-body">
                 <h5 className="card-title"><a href="http://www.civicpdx.org/budget" className="theme-link">Civic Budget Project</a></h5>
                   <p className="card-text">We worked with the City of Portland Budget office to visualize the city's budget over a 10 year period</p>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="isotope-item col-md-6 mb-5 webapp frontend backend">
           <div className="card project-card">
             <div className="row no-gutters">
               <div className="col-lg-4 card-img-holder">
               <img src={civicHome} className="card-img" alt="portfolio"></img>
               </div>
               <div className="col-lg-8">
                 <div className="card-body">
                 <h5 className="card-title"><a href="http://www.civicpdx.org/homelessness" className="theme-link">Civic Homelessness Project</a></h5>
                   <p className="card-text">We visualized a census of the Portland unhoused population using the Point in Time Count</p>
                   <p className="card-text"><br></br></p>
                   <p className="card-text"><br></br></p>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="isotope-item col-md-6 mb-5 webapp frontend backend">
           <div className="card project-card">
             <div className="row no-gutters">
               <div className="col-lg-4 card-img-holder">
               <img src={civicER} className="card-img" alt="portfolio"></img>
               </div>
               <div className="col-lg-8">
                 <div className="card-body">
                 <h5 className="card-title"><a href="http://www.civicpdx.org/emergency" className="theme-link">Civic Emergency Response Project</a></h5>
                   <p className="card-text">An exploration of factors affecting Porltand's emergency response times.</p>
                   <p className="card-text"><br></br></p>
                   <p className="card-text"><br></br></p>
                 </div>
               </div>
             </div>
           </div>
         </div>

         <div className="isotope-item col-md-6 mb-5 webapp frontend backend">
           <div className="card project-card">
             <div className="row no-gutters">
               <div className="col-lg-4 card-img-holder">
               <img src={civicHousing} className="card-img" alt="portfolio"></img>
               </div>
               <div className="col-lg-8">
                 <div className="card-body">
                 <h5 className="card-title"><a href="http://www.civicpdx.org/housing" className="theme-link">Civic Housing Affordability Project</a></h5>
                   <p className="card-text">Visualizing Portland neighborhood demographics and housing affordability.</p>
                   <p className="card-text"><br></br></p>
                   <p className="card-text"><br></br></p>
                 </div>
               </div>
             </div>
           </div>
         </div>
      
         <div className="isotope-item col-md-6 mb-5 webapp frontend backend">
           <div className="card project-card">
             <div className="row no-gutters">
               <div className="col-lg-4 card-img-holder">
               <img src={civicTransport} className="card-img" alt="portfolio"></img>
               </div>
               <div className="col-lg-8">
                 <div className="card-body">
                 <h5 className="card-title"><a href="http://www.civicpdx.org/transportation" className="theme-link">Civic Transportation Project</a></h5>
                   <p className="card-text">An exploration of Porltand's traffic incidents by mode of transportation.</p>
                   <p className="card-text"><br></br></p>
                   <p className="card-text"><br></br></p>
                 </div>
               </div>
             </div>
           </div>
         </div>
      
      </div>


        </div>
      </section>

</div>


</BodyClassName>
    <Header />
    </React.Fragment>
);

export default Projects;
