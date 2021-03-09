import React from 'react';
import { Carousel } from 'antd';
import './css/DesktopSliderStyle.css';

const DesktopSlider = () => {
    return(
        <div style={{marginTop: 10, paddingLeft: 7.5, paddingRight: 7.5}}>
            <Carousel autoplay>
            <div className="slideContentSlide" >
                <img src='https://lh3.googleusercontent.com/proxy/riAPgvOx3i_wQi2AUGXGDGATITpZKCW-N2sV21F035YC99OeU4SRNSV5RwjcmGYro4B2pmavO47yRci97RirPdsJbCIEy_dbfid-BRLNj9xU84-PDFP_r5rSS16YlNah-xgZ0LxMs11O1y3kqw' />
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