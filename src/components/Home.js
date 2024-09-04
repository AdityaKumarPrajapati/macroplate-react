// src/components/Home.js

import React from 'react';
import HomePageBanner from './HomePageBanner';
import ReadyEatComponent from './ReadyEatComponent';
import './css/Home.css'; // Import CSS for styling the Home component

function Home() {
  return (
    <div className="home">
      <HomePageBanner />
      <ReadyEatComponent />
    </div>
  );
}

export default Home;
