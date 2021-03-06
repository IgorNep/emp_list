import React from 'react';

const NotFound = () => (
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
      <span className="text-primary">404</span> Not Found
    </h1>
    <p>Sorry this page does not exist</p>
  </div>
);

export default NotFound;
