import React from 'react';
import { Carousel } from 'antd';
import IMG from '../../../../assets/mainBanner.jpg';

const HomeScreenSlide = () => {
  return(
    <Carousel>
      <div style={{height: 160, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img
          src={IMG}
          width={'100%'}
        />
      </div>
    </Carousel>
  );
}

export default HomeScreenSlide;