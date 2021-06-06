import React from "react";
import { Row, Col } from "antd";
import "./css/DesktopProductDecriptionStyle.css";

const DesktopProductDecription = (props) => {
  const { heading, text } = props;
  return (
    <div className="productDetailsSec">
      <div className="productDescription">
        <Row>
          <Col span={4}>
            <span className="description">{heading}</span>
          </Col>
          <Col span={18}>
            <p className="actualDescription">{text}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DesktopProductDecription;
