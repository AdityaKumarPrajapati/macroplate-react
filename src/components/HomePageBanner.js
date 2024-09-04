// src/components/Home.js

import React from 'react';
import bannerImage from '../asset/images/bnr_img.png'
import './css/Home.css'; // Import CSS for styling the Home component
import ZipCodeStarted from './ZipCodeStarted';

function HomePageBanner() {
  return (
    <div className="homePageBannerWrapper">
      <div className='bannerImage'>
        <img src={bannerImage} alt="Banner" />
      </div>
      <div className='bannerContent'>
        <div>
          <p class="title-white title-banner homePageBanner">
            Award-winning Chefs
            Health Driven Menus
            Delivered Fresh Daily
          </p>
          <ZipCodeStarted />
        </div>
      </div>
    </div>
  );
}

export default HomePageBanner;
