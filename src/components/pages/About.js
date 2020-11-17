import React from 'react';

const About = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '80vh',
    }}
  >
    <h1>
      <span className="text-primary">About</span>
    </h1>
    <p>Simple application for display birthday's of employees</p>
    <p>Version 1.0.0</p>
  </div>
);

export default About;
