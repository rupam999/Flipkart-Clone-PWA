import React, { useState } from 'react';
import IMG from '../../../../../assets/mainBanner.jpg';
import { Carousel } from 'antd-mobile';

const HomeScreenSlide = () => {
    const [data, setData] = useState(['1']);
    const [imgHeight, setImageHeight] = useState<any>(150);
    const getBannerImage = (index: String) => {
        if(index === '1') {
            return `${IMG}`;
        } 
        // else if(index === '2') {
        //     return `https://scontent.fymy1-2.fna.fbcdn.net/v/t1.0-9/s720x720/60819480_2382860748439645_3174593929735569408_o.jpg?_nc_cat=106&_nc_sid=8024bb&_nc_ohc=o3IJU7R4ae0AX-XxyvT&_nc_ht=scontent.fymy1-2.fna&_nc_tp=7&oh=599b9e75f7ade83e3ddad1511026e450&oe=5F5D432F`;
        // }
    }
    return(
        <Carousel
          autoplay={true}
          infinite
        //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        //   afterChange={index => console.log('slide to', index)}
        >
          {data.map(val => (
            <a
                key={val}
                style={{ display: 'inline-block', width: '100%', height: imgHeight }}
                >
                <img
                    src={getBannerImage(val)}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                    // fire window resize event to change height
                    //   window.dispatchEvent(new Event('resize'));
                    //   setImageHeight('auto');
                    }}
                />
            </a>
          ))}
        </Carousel>
    );
}

export default HomeScreenSlide;