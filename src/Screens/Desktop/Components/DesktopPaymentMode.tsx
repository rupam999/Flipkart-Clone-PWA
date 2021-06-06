import React from "react";
import { Radio, Button, Space } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import "./css/DesktopPaymentMode.css";

const DesktopPaymentMode = (props) => {
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
  };

  return (
    <div className="desktopPaymentSection">
      <div className="deliveryDisabled">
        <h3>Delivery Address</h3>
        <h3>
          Done <CheckCircleOutlined />
        </h3>
      </div>
      <div className="choiceOfPayment">
        <div className="heading">
          <h3>Payment Options</h3>
        </div>
        <div className="background">
          <div className="paymentChoice">
            <Radio.Group onChange={onChange} value={1} className="">
              <Space direction="vertical">
                <Radio value="1">Cash And Delivery</Radio>
                <Radio value="5">Online Payment</Radio>
              </Space>
            </Radio.Group>
          </div>
          <div className="placeButton">
            <Button>Continue and Place Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopPaymentMode;
