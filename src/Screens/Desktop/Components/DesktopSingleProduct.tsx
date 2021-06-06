import React from "react";
import { Row, Col, Rate } from "antd";
import { useHistory } from "react-router-dom";
import "./css/DesktopSingleProductStyle.css";

const DesktopSingleProduct = (props) => {
  const { data } = props;
  const history = useHistory();

  // console.log(data)

  const calculateOff = (mrp, price) => {
    return Math.round(((mrp - price) / mrp) * 100);
  };

  const sendToProductDetailsPage = (id) => {
    history.push(`/Search/fullDetails/${id}`);
  };

  return (
    <div
      className="singleProductDiv"
      onClick={() => sendToProductDetailsPage(data._id)}
    >
      <Row>
        <Col span={8}>
          <div className="productImage">
            <img src={data.url} alt={data.name.toString()} />
          </div>
        </Col>
        <Col span={16}>
          <div className="mainProductContent">
            <h3>{data.name}</h3>
            <span className="rating">
              {data.rating ? (
                <React.Fragment>
                  <Rate allowHalf disabled defaultValue={4.5} />
                  <span>&nbsp; (4.5★) &nbsp;</span>
                  <span>&nbsp;1000 Ratings</span>
                </React.Fragment>
              ) : (
                <span className="desktopNoRatingText">No Rating Found</span>
              )}
            </span>
            <p className="price desktopItemPrice">
              <span className="mainPrice">&#8377; {data.price}</span>
              {Number(data.price) !== Number(data.mrp) ? (
                <React.Fragment>
                  <span>
                    &nbsp; <del>&#8377; {data.mrp}</del>&nbsp;
                  </span>
                  <span>
                    {" "}
                    ({calculateOff(Number(data.mrp), Number(data.price))}% OFF){" "}
                  </span>
                </React.Fragment>
              ) : null}
            </p>
            <div className="extraInformation desktopExtraInfo">
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
};

export default DesktopSingleProduct;
