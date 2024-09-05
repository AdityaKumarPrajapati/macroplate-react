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
        <div className='bannerContentContainer'>
          <div>
            <p class="title-white marginZero title-banner homePageBanner">Award-winning Chefs</p>
            <p class="title-white marginZero title-banner homePageBanner">Health Driven Menus</p>
            <p class="title-white marginZero title-banner homePageBanner">Delivered Fresh Daily  </p>
          </div>
          <ZipCodeStarted />
        </div>
      </div>
    </div>
  );
}

export default HomePageBanner;
