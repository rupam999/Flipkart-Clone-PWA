import React from 'react';
import { Carousel } from 'antd';
import './css/DesktopSliderStyle.css';

const DesktopSlider = () => {
    return(
        <div style={{marginTop: 10, paddingLeft: 7.5, paddingRight: 7.5}}>
            <Carousel autoplay>
                <div className="slideContentSlide" >
                    <img alt="Samsung" 
                        srcSet="https://rukminim1.flixcart.com/flap/3376/560/image/2d2bf7e2164bbfd3.jpg?q=50 2x, 
                            https://rukminim1.flixcart.com/flap/1688/280/image/2d2bf7e2164bbfd3.jpg?q=50 1x" 
                        src="https://rukminim1.flixcart.com/flap/1688/280/image/2d2bf7e2164bbfd3.jpg?q=50" 
                        data-tkid="A_23c79907-21c0-44b6-92e6-53f5014bb5e2_3.7ZEGS89RHY11" 
                    />
                </div>
                <div className="slideContentSlide" >
                    <img alt="ROG Phone 5 - Today" 
                        srcSet="https://rukminim1.flixcart.com/flap/3376/560/image/2ef658eed5310386.jpg?q=50 2x, 
                            https://rukminim1.flixcart.com/flap/1688/280/image/2ef658eed5310386.jpg?q=50 1x" 
                        src="https://rukminim1.flixcart.com/flap/1688/280/image/2ef658eed5310386.jpg?q=50" 
                        data-tkid="A_23c79907-21c0-44b6-92e6-53f5014bb5e2_3.RKKHLM3AOBWU" 
                    />
                </div>
                <div className="slideContentSlide" >
                    <img alt="Samsung" 
                        srcSet="https://rukminim1.flixcart.com/flap/3376/560/image/2d2bf7e2164bbfd3.jpg?q=50 2x, 
                            https://rukminim1.flixcart.com/flap/1688/280/image/2d2bf7e2164bbfd3.jpg?q=50 1x" 
                        src="https://rukminim1.flixcart.com/flap/1688/280/image/2d2bf7e2164bbfd3.jpg?q=50" 
                        data-tkid="A_23c79907-21c0-44b6-92e6-53f5014bb5e2_3.7ZEGS89RHY11" 
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default DesktopSlider;