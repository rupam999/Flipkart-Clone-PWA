import React from 'react';
import { Carousel } from 'antd';
import './css/DesktopSliderStyle.css';

const DesktopSlider = () => {
    return(
        <div style={{marginTop: 10, paddingLeft: 7.5, paddingRight: 7.5}}>
            <Carousel autoplay>
            <div className="slideContentSlide" >
                <img src='https://rukminim1.flixcart.com/flap/1000/1080/image/6cf5ca3509f98556.jpg' />
            </div>
            <div className="slideContentSlide" >
                <p>jhkjh</p>
            </div>
            <div className="slideContentSlide" >
                <p>jhkjh</p>
            </div>
            </Carousel>
        </div>
    );
}

export default DesktopSlider;