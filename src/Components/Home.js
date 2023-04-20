import React from 'react';
import { Link } from 'react-router-dom';
import Quotes from './Quotes';
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Quotes/>
      <Link to="/Quotes">Go to Quotes Page</Link>
    </div>
  );
};

export default Home;