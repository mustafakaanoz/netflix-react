import React from 'react';
import Banner from '../Banner/Banner';
import '../HomeScreen/HomeScreen.css';
import Nav from '../Nav/Nav';

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav />
      <Banner />
      {/* Row */}
    </div>
  )
}

export default HomeScreen