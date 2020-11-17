import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
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
        <span className="text-primary">Hello!</span> This is home page
      </h1>
      <p className="my-2">Press button to show list of employees</p>
      <p>
        <Link to="/employees" className="btn btn-primary">
          Employees
        </Link>
      </p>
    </div>
  );
};

export default Home;
