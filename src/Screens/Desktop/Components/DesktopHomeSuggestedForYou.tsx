import React from "react";
import { Row, Col, Button } from "antd";
import "./css/DesktopHomeSuggestedForYouStyle.css";
import DesktopHomeSingleProduct from "./DesktopHomeSingleProduct";

const DesktopHomeSuggestedForYou = (props) => {
  const { heading } = props;
  return (
    <div className="SuggestedProductHome">
      <Row>
        <Col span={24}>
          <div className="SuggestedProductHomeItem">
            <div className="heading">
              <h2>{heading}</h2>
              <Button>View All</Button>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <DesktopHomeSingleProduct />
              <DesktopHomeSingleProduct />
              <DesktopHomeSingleProduct />
              <DesktopHomeSingleProduct />
              <DesktopHomeSingleProduct />
              <DesktopHomeSingleProduct />
              <DesktopHomeSingleProduct />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DesktopHomeSuggestedForYou;
