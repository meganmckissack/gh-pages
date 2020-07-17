import React from "react";
import BioImage from './img/Megan_McKissack.jpg';
import Header from './Header';


const About = () => (
  <React.Fragment>
    <Header />
  <div className="main-wrapper">
		<section className="about-me-section p-3 p-lg-5 theme-bg-light">
			<div className="container">
				<div className="profile-teaser media flex-column flex-lg-row">
						<div className="media-body">
						<h2 className="name font-weight-bold mb-1">Megan McKissack</h2>
						<div className="tagline mb-3">Frontend Developer and Creative Coder</div>
						<div className="bio mb-4">I'm a frontend developer interested in open data, data visualization, and emerging creative technology.
            <h4 className="font-weight-bold mt-5">Contact</h4>
			    <div className="intro">
			    <p>Send me an email at <a href="mailto:#">meganmckissack@gmail.com</a></p>
          </div>
						</div>
					</div>
					<img className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0" src={BioImage} alt="headshot"></img>
				</div>
			</div>
		</section>

    <section class="overview-section p-3 p-lg-5">
			<div class="container">
        <p>
          <br></br>
          <br></br>
        </p>
      </div>
    </section>

  </div>
  </React.Fragment>
);


		
  export default About;
		
		
		