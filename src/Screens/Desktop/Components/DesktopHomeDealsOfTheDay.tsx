import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import './css/DesktopDealsOfTheDayStyle.css';

const DesktopHomeDealsOfTheDay = () => {
    const history = useHistory();
    return(
        <>
        <div className="DealsContent">
            <Row>
                <Col span={20}>
                    <div className="dealsOfTheDayHomeScreenItem">
                        All the products will display here
                        <p onClick={() => history.push('/DealsOfTheDay')}>DEALS OF THE DAY</p>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="dealsOfTheDayAdHomeBanner">
                        <img src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70" alt="Ad" />
                        <div style={{textAlign: 'center'}}>SALE SALE SALE</div>
                    </div>
                </Col>
            </Row>
        </div>
        <div className="Home3banner">
            <Row>
                <Col span={8}>
                    <div className="Home3bannerImage marginRight">
                        <img alt="Wash5thFeb" 
                            srcSet="https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50 2x, 
                                https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50 1x" 
                            src="https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50" 
                        />
                    </div>
                </Col>
                <Col span={8}>
                    <div className="Home3bannerImage marginRight">
                        <img alt="Furniture Bestsellers" 
                            srcSet="https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg?q=50 2x, 
                                https://rukminim1.flixcart.com/flap/480/480/image/084789479074d2b2.jpg?q=50 1x" 
                            src="https://rukminim1.flixcart.com/flap/480/480/image/084789479074d2b2.jpg?q=50" 
                        />
                    </div>
                </Col>
                <Col span={8}>
                    <div className="Home3bannerImage">
                        <img alt="Wash5thFeb" 
                            srcSet="https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50 2x, 
                                https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50 1x" 
                            src="https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50" 
                        />
                    </div>
                </Col>
            </Row>
        </div>
        </>
    );
}

export default DesktopHomeDealsOfTheDay;