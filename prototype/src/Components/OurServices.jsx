import React from 'react';
import './OurServices.css';
import { Link } from 'react-router-dom';

const ServicesComponent = () => {
  return (
    <div className='main'>
      <div className='Heading'>
        <p><span style={{ color: 'white', fontSize: '70px' }}>_</span><br/>OUR<br/>SERVICES</p>
      </div>
    <div className="services-container">
      <div className="service-item">
        <i className="fas fa-clock"></i>
        <Link style={{textDecoration: 'none'}} to="/"><p>SELF<br/>ASSESMENT</p></Link>
      </div>
      <div className="service-item">
        <i className="fas fa-map-marker-alt"></i>
        <Link style={{textDecoration: 'none'}} to="/"><p>Nearby<br/>Help</p></Link>
      </div>
      <div className="service-item">
        <i className="fas fa-heartbeat"></i>
        <Link style={{textDecoration: 'none'}} to="/activities" ><p>Fun<br/>Activities</p></Link>
      </div>
      <div className="service-item">
        <i className="fas fa-heartbeat"></i>
        <Link style={{textDecoration: 'none'}} to="/"><p>Healthy<br/>Lifestyle</p></Link>
      </div>

    </div>
    </div>
  );
};

export default ServicesComponent;
