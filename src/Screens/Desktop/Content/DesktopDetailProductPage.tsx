import React from 'react';
import { Row, Col, Button, Rate, Form, Input, Modal } from 'antd';
import { ShoppingCartOutlined, SendOutlined, TagFilled } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import DesktopFooter from '../Components/DesktopFooter';
import DesktopNavbar from '../Components/DesktopNavbar';
import './css/DesktopDetailsProductPageStyle.css';

export const DesktopDetailProductPage = (props) => {
    const { productId } = useParams<{productId: any}>();

    const checkPinNumber = (values) => {
        console.log('Success', values);
    }

    const onFinishFailed = (values) => {
        Modal.error({
            title: 'Error',
            content: 'Internal Server Error, Please try again after sometimes...'
        });
    }

    return(
        <div style={{width: '100%'}}>
            <DesktopNavbar />
            <div className="desktopSeperateProduct">
                <Row>
                    <Col span={10}>
                        <div>
                            <img 
                                className="desktopProductImage" 
                                alt="" 
                                src="https://rukminim1.flixcart.com/image/416/416/kbs9k7k0/television/c/j/3/samsung-ua32t4340akxxl-original-imaft25qdysfsq7k.jpeg?q=70" 
                            />
                            <div className="DesktopBuyBtn">
                                <Button className="btn addToCartBtn">
                                    <ShoppingCartOutlined /> Add to Cart
                                </Button>
                                <Button className="btn buyNow">
                                    <SendOutlined />Buy Now
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col span={14}>
                        <div className="desktopProductContent">
                            <h3>SAMSUNG 80 cm (32 inch) HD Ready LED Smart TV 2020 Edition  (UA32T4340AKXXL)</h3>
                            <span className="rating">
                                {true ? (
                                    <React.Fragment>
                                        <Rate allowHalf disabled defaultValue={4.5} />
                                        <span>&nbsp; (4.5★) &nbsp;</span>
                                        <span>&nbsp;1000 Ratings</span>
                                    </React.Fragment>
                                ) : (
                                    <span className="desktopNoRatingText">No Rating Found</span>
                                )}
                            </span>
                            <p className="price">
                                <span className="mainPrice">&#8377; {20999}</span>
                                {/* {Number(data.price) !== Number(data.mrp) ? ( */}
                                    <React.Fragment>
                                        <span>&nbsp; <del>&#8377; {20999}</del>&nbsp;</span>
                                        {/* <span> ({calculateOff(Number(data.mrp), Number(data.price))}% OFF) </span> */}
                                    </React.Fragment>
                                {/* ) : null } */}
                            </p>
                            <div className="desktopAvailableOffer">
                                <p>
                                    <span><TagFilled /></span>
                                    <span className="bankoffer">Bank Offer</span>
                                    5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                                </p>

                                <p>
                                    <span><TagFilled /></span>
                                    <span className="bankoffer">Bank Offer</span>
                                    5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                                </p>

                                <p>
                                    <span><TagFilled /></span>
                                    <span className="bankoffer">Bank Offer</span>
                                    5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                                </p>
                                <p>
                                    <span><TagFilled /></span>
                                    <span className="bankoffer">Bank Offer</span>
                                    5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                                </p>
                                
                            </div>

                            <Form
                                className="checkDeliveryPinCode"
                                onFinish={checkPinNumber}
                                onFinishFailed={onFinishFailed}
                                >
                                <Form.Item name='pinCode'>
                                    <Input
                                        type='number'
                                        placeholder='Enter Delivery Pincode'
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                            
                            <div className="productDescription">
                                <Row>
                                    <Col span={4}>
                                        <span className="description">Highlights</span>
                                    </Col>
                                    <Col span={18}>
                                        <p className="actualDescription">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid et rem vero expedita ex distinctio quaerat 
                                            earum delectus nesciunt numquam. Incidunt harum fuga explicabo non dicta, neque corporis 
                                            eius debitis?
                                        </p>
                                    </Col>
                                </Row>
                            </div>

                            <div className="productDescription">
                                <Row>
                                    <Col span={4}>
                                        <span className="description">Description</span>
                                    </Col>
                                    <Col span={18}>
                                        <p className="actualDescription">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid et rem vero expedita ex distinctio quaerat 
                                            earum delectus nesciunt numquam. Incidunt harum fuga explicabo non dicta, neque corporis 
                                            eius debitis?
                                        </p>
                                    </Col>
                                </Row>
                            </div>

                            <div className="productSpecification">
                                <Row>
                                    <Col span={4}>
                                        <span className="specification">Specifications</span>
                                    </Col>
                                    <Col span={18}>
                                        <p className="actualSpecification">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid et rem vero expedita ex distinctio quaerat 
                                            earum delectus nesciunt numquam. Incidunt harum fuga explicabo non dicta, neque corporis 
                                            eius debitis?
                                        </p>
                                    </Col>
                                </Row>
                            </div>

                            <p>&nbsp;</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <DesktopFooter />
        </div>
    );
}