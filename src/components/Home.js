import React from 'react';
import './Home.css'; // Import a CSS file for styling

import carrer from './carrer.jpg'

const Home = () => (
  <div className="home-container">
    <div className="content">
      
      {/* Add home page content here */}
      <p>Talent Track offers tools for users to build and optimize their resumes. Job seekers can create professional profiles, showcasing their skills, education, and work experience. These profiles help them stand out to potential employers and recruiters.</p>
    </div>
    <div className="image-container">
      <img
        src={carrer} // Replace with the actual image URL
        alt="Description of the image"
        className="image"
      />
    </div>
  </div>
);

export default Home;
