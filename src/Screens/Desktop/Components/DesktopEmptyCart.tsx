import React from "react";
import IMG from "../../../assets/empty_cart_desktop.png";
import "./css/DesktopEmptyShoppingCartStyle.css";

const DesktopEmptyCart = (props) => {
  const { heading, text } = props;
  return (
    <div className="desktopCartItem">
      <div className="emptyDivContent">
        <h3>My Cart</h3>
        <div className="message">
          <div>
            <img src={IMG} alt="Empty Basket" />
            <h3>{heading}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopEmptyCart;
