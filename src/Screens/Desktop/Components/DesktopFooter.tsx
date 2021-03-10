import React from 'react';
import { Row, Col } from 'antd';
import PAYMENT_METHOD from '../../../assets/paymentMethod.svg';
import SELL_ON_ECOMMERCE from '../../../assets/SellOnEcommerce.svg';
import ADVERTISE from '../../../assets/Advertise.svg';
import GIFTCARDS from '../../../assets/GiftCards.svg';
import HELP_CENTER from '../../../assets/HelpCenter.svg';
import Colors from '../../../utils/Colors';
import './css/DesktopFooterStyle.css';

const DesktopFooter = () => {
    return(
        <div 
            className="DesktopFooter"
            style={{backgroundColor: Colors.footerColor()}}>
            <Row className="DesktopMainFooter">
                <Col span={1}></Col>
                <Col span={11}>
                    <Row>
                        <Col span={6}>
                            <div className="DesktopFooter4Section">
                                <h4>ABOUT</h4>
                                <a href="#">Contact Us</a>
                                <a href="#">About Us</a>
                                <a href="#">Careers</a>
                                <a href="#">Flipkart Stories</a>
                                <a href="#">Press</a>
                                <a href="#">Flipkart Wholesale</a>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="DesktopFooter4Section">
                                <h4>HELP</h4>
                                <a href="#">Payments</a>
                                <a href="#">Shipping</a>
                                <a href="#">Cancellation & Returns</a>
                                <a href="#">FAQ</a>
                                <a href="#">Report Infringement</a>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="DesktopFooter4Section">
                                <h4>POLICY</h4>
                                <a href="#">Return Policy</a>
                                <a href="#">Terms of Use</a>
                                <a href="#">Security</a>
                                <a href="#">Privacy</a>
                                <a href="#">Sitemap</a>
                                <a href="#">EPR Compliance</a>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="DesktopFooter4Section">
                                <h4>SOCIAL</h4>
                                <a href="#">Facebook</a>
                                <a href="#">Twitter</a>
                                <a href="#">Instagram</a>
                                <a href="#">Youtube</a>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={1}>
                    <div className="borderRight"><h4>&nbsp;</h4></div>
                </Col>
                <Col span={10}>
                    <Row>
                        <Col span={12}>
                            <div className="DesktopFooterMailUs">
                                <h4>Mail Us:</h4>
                                <p>E-commerce Internet Private Limited, </p>
                                <p>Ecommerce Buildings, Road Name & </p>
                                <p>Indian Embassy Tech Village, </p>
                                <p>Outer Ring Road, Devarabeesanahalli Village, </p>
                                <p>Bengaluru, 560103, </p>
                                <p>Karnataka, India</p>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="DesktopFooterOfficeAddress">
                                <h4>Registered Office Address:</h4>
                                <p>E-commerce Internet Private Limited, </p>
                                <p>Ecommerce Buildings, Road Name & </p>
                                <p>Indian Embassy Tech Village, </p>
                                <p>Outer Ring Road, Devarabeesanahalli Village, </p>
                                <p>Bengaluru, 560103, </p>
                                <p>Karnataka, India  </p>
                                <p>CIN : NA </p>
                                <p>Telephone: NA </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={1}></Col>
            </Row>
            <Row>
                <Col span={1}></Col>
                <Col span={22}>
                    <div className="DesktopCopyRightSection">
                        <div className="DesktopFooterCopyRight">
                            <img src={SELL_ON_ECOMMERCE} alt="Sell on E-commerce" />
                            <span>Sell on E-commerce</span>
                        </div>
                        <div className="DesktopFooterCopyRight">
                            <img src={ADVERTISE} alt="Advertise" />
                            <span>Advertise</span>
                        </div>
                        <div className="DesktopFooterCopyRight">
                            <img src={GIFTCARDS} alt="Gift Cards" />
                            <span>Gift Cards</span>
                        </div>
                        <div className="DesktopFooterCopyRight">
                            <img src={HELP_CENTER} alt="Help Center" />
                            <span>Help Center</span>
                        </div>
                        <div className="DesktopFooterCopyRight">
                            <span>&copy; 2021 E-commerce</span>
                        </div>
                        <div className="paymentLogo">
                            <img src={PAYMENT_METHOD} alt="Payment Methods" />
                        </div>
                    </div>
                </Col>
                <Col span={1}></Col>
            </Row>
        </div>
    );
}

export default DesktopFooter;