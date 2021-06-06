import React, { useEffect, useContext, useState } from "react";
import { Row, Col, Modal, Form, Input, Button } from "antd";
import { useLocation, useHistory } from "react-router-dom";
import { Store } from "../../../Context/Store";
import Desktop404 from "../Components/Desktop404";
import DesktopDeliveryForm from "../Components/DesktopDeliveryForm";
import "./css/DesktopPaymentStyle.css";
import DesktopPaymentMode from "../Components/DesktopPaymentMode";

export const DesktopPayment = () => {
  const location = useLocation<{ price: number }>();
  const { user } = useContext(Store);
  const history = useHistory();
  const [error, setError] = useState<Boolean>(false);
  const [price, setPrice] = useState<any>(0);
  const [showPaymentMode, setShowPaymentMode] = useState<Boolean>(true);

  const checkUser = async () => {
    try {
      console.log("USER", user);
      if (!(user && user.id) || !location.state) {
        // history.push("/DesktopHome");
      } else {
        const { price } = location.state;
        setPrice(price);
      }
    } catch (error) {
      Modal.error({
        title: "Error",
        content: "Internal Server Error, Please try again after sometime...",
      });
      setError(true);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return error ? (
    <Desktop404 />
  ) : (
    <div className="DesktopPayment">
      <Row>
        <Col span={16}>
          {!showPaymentMode ? (
            <DesktopDeliveryForm setShowPaymentMode={setShowPaymentMode} />
          ) : (
            <DesktopPaymentMode />
          )}
        </Col>
        <Col span={8}>
          <div className="summaryOfPayment">
            <div className="heading">
              <h2>Price details</h2>
            </div>
            <div className="priceSection">
              <h3>Price</h3>
              <h3>{price}</h3>
            </div>
            <div className="priceSection borderBottom">
              <h3>Delivery Charges</h3>
              <h3>FREE</h3>
            </div>
            <div className="priceSection bold">
              <h3>Total Payable</h3>
              <h3>{price}</h3>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
