import React from "react";
import "./css/DesktopHomeSingleProductStyle.css";

const DesktopHomeSingleProduct = (props) => {
  const { extraRight = "auto" } = props;
  return (
    <div
      className="desktopHomeSingleProductDiv"
      style={{ marginRight: extraRight }}
    >
      <div className="productContent">
        <img
          alt=""
          src="https://rukminim1.flixcart.com/image/150/150/jjiw1ow0/desk-organizer/f/w/r/metal-mesh-desk-organizer-black-pen-and-clip-holder-shrih-original-imaey85d7fguztqe.jpeg?q=70"
        />
        <h3>Desk Organiser</h3>
        <h5>Price: 1299</h5>
        <p>Explore Now</p>
      </div>
    </div>
  );
};

export default DesktopHomeSingleProduct;
