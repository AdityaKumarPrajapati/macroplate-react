// src/components/Home.js

import React from 'react';
import bannerImage from '../asset/images/bnr_img.png'
import './css/Home.css'; // Import CSS for styling the Home component

function HomePageBanner() {
  return (
    <div className="homePageBannerWrapper">
      <div className='bannerImage'>
        <img src={bannerImage} alt="Banner" />
      </div>
      <div className='bannerContent'>
        <p class="title-white title-banner homePageBanner">Award-winning Chefs
          Health Driven Menus
          Delivered Fresh Daily</p>
      </div>
    </div>
  );
}

export default HomePageBanner;
