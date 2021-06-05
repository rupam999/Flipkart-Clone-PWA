import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import DesktopHomeSingleProduct from './DesktopHomeSingleProduct';
import './css/DesktopDealsOfTheDayStyle.css';

const DesktopHomeDealsOfTheDay = () => {
    const history = useHistory();
    return(
        <div className="DealsContent">
            <Row>
                <Col span={20}>
                    <div className="dealsOfTheDayHomeScreenItem">
                        {/* <p onClick={() => history.push('/DealsOfTheDay')}>DEALS OF THE DAY</p> */}
                        <div className="heading">
                            <h2>Deals of the Day</h2>
                            <Button>View All</Button>
                        </div>
                        <div className="mainProducts">
                            <DesktopHomeSingleProduct extraRight='16px' />
                            <DesktopHomeSingleProduct extraRight='16px' />
                            <DesktopHomeSingleProduct extraRight='16px' />
                            <DesktopHomeSingleProduct extraRight='16px' />
                            <DesktopHomeSingleProduct extraRight='16px' />
                        </div>
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
    );
}

export default DesktopHomeDealsOfTheDay;