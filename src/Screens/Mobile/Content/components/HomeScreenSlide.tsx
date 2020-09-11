import React, { useState } from 'react';
import { Carousel } from 'antd-mobile';

const HomeScreenSlide = () => {
    const [data, setData] = useState(['1', '2']);
    const [imgHeight, setImageHeight] = useState<any>(150);
    const getBannerImage = (index: String) => {
        if(index === '1') {
            return `https://lh3.googleusercontent.com/ESowp9auDfIfT1WR9DreOJKj0VqpVhdioOXUeCtWt0q2mL5FR00PLlyiuffu6-XDAKsz8I_8D_Q8HewIOtyU9sGilzMY=w1000`;
        } else if(index === '2') {
            return `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTi8TPDP5LdzZxhYSNCqgkDeyedijJ6kXletQ&usqp=CAU`;
        }
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