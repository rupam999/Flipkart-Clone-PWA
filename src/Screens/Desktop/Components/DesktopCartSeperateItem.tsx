import React from "react";
import { Row, Col } from "antd";
import { getData } from "../../../localStorage/getData";
import "./css/DesktopCartSeperateItemStyle.css";
import { storeData } from "../../../localStorage/storeData";

const DesktopCartSeperateItem = (props) => {
  const { product, setTotalItem, setCartItemLoading, setCartItem } = props;

  const removeItemFromCart = async (id) => {
    setCartItemLoading(true);
    const cartItem = await getData("cart");
    const newCartItem = cartItem.filter((data) => {
      return !(data.productId.toString() === id.toString());
    });

    setCartItem(newCartItem);
    await storeData("cart", newCartItem);
    setTotalItem(newCartItem.length);
    setCartItemLoading(false);
  };

  return (
    <Row className="shoppingItem">
      <Col span={5}>
        <div className="productImage">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="removeItem">
          <h2 onClick={() => removeItemFromCart(product.productId)}>Remove</h2>
        </div>
      </Col>
      <Col span={10}>
        <div className="productDescription">
          <h3>{product.name}</h3>
          <h3>Category: {product.category}</h3>
          <h4>₹1,099</h4>
        </div>
      </Col>
      <Col span={9}>
        <div className="deliveryRelated">
          <p>Delivery: As soon as Possible</p>
        </div>
      </Col>
    </Row>
  );
};

export default DesktopCartSeperateItem;
