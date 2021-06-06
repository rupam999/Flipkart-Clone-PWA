import React from "react";
import { Radio, Button, Space } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { getPaymentDetails } from "../../../api/getPaymentDetails";
import "./css/DesktopPaymentMode.css";

const DesktopPaymentMode = (props) => {
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
  };

  const payNow = async () => {
    const data = await getPaymentDetails();
    if (data !== -1) {
      const options = {
        key: "rzp_test_p6rOeQwQ4iyQ8x",
        amount: data.amount.toString(),
        currency: data.currency,
        name: "Ecommerce",
        description: "Description",
        // "image": IMAGE,
        order_id: data.id,
        handler: async function (response) {
          console.log(response);
          // alert(response.razorpay_payment_id),
          // alert(response.razorpay_subscription_id),
          // alert(response.razorpay_signature);
        },
        prefill: {
          name: "hjkhkj",
          email: "abc@example.com",
        },
        theme: {
          color: "#F37254",
        },
      };

      const _window = window as any;
      const paymentObject = new _window.Razorpay(options);
      paymentObject.open();
    }
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
            <Button onClick={payNow}>Continue and Place Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopPaymentMode;
