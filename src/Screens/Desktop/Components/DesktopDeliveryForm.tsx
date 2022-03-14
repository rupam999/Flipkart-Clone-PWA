import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import "./css/DesktopDeliveryFormAddress.css";

const DesktopDeliveryForm = (props) => {
  const { setShowPaymentMode } = props;
  return (
    <div className="mainDeliverySection">
      <div className="heading">
        <h2>Delivery Address</h2>
      </div>
      <div className="formArea">
        <Form>
          <Row>
            <Col span={12} className="rightPadding">
              <Form.Item>
                <Input placeholder="First Name" />
              </Form.Item>

              <Form.Item>
                <Input type="number" placeholder="Pin Code" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <Input placeholder="Last Name" />
              </Form.Item>

              <Form.Item>
                <Input placeholder="State" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Input.TextArea
                  placeholder="Enter Full Address"
                  className="textArea"
                  rows={5}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  onClick={() => setShowPaymentMode(true)}
                >
                  Deliver Here
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default DesktopDeliveryForm;
