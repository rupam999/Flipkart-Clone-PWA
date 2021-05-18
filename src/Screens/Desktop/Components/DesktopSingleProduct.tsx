import React from 'react';
import { Row, Col, Rate } from 'antd';
import './css/DesktopSingleProductStyle.css';

const DesktopSingleProduct = () => {
    return(
        <div className="singleProductDiv">
            <Row>
                <Col span={8}>
                    <div className="productImage">
                        <img src="https://rukminim1.flixcart.com/image/416/416/kg40k280/air-conditioner-new/s/r/z/ar18ty3qbpu-1-5-split-samsung-inverter-original-imafwefyqbfqnjjy.jpeg?q=70" />
                    </div>
                </Col>
                <Col span={16}>
                    <div className="mainProductContent">
                        <h3>SAMSUNG 1.5 Ton 5 Star Split Inverter AC  - White, Pastel Blue</h3>
                        <span className="rating">
                            <Rate allowHalf disabled defaultValue={4.5} />
                            <span>&nbsp; (4.5★) &nbsp;</span>
                            <span>&nbsp;1000 Ratings</span>
                        </span>
                        <p className="price">
                            <span className="mainPrice">&#8377; 20,999</span>
                            <span>&nbsp; <del>&#8377; 25000</del>&nbsp;</span>
                            <span> (16% Off) </span>
                        </p>
                        <div className="extraInformation">
                            <p>This is a single line description</p>
                            <p>This is next line description</p>
                            <p>This is next line description</p>
                            <p>FREE Delivery by E-commerce</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default DesktopSingleProduct;