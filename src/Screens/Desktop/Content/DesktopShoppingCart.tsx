import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import { Store } from "../../../Context/Store";
import { getData } from "../../../localStorage/getData";
import DesktopEmptyCart from "../Components/DesktopEmptyCart";
import Loading from "../Components/Loading";
import DesktopCartSeperateItem from "../Components/DesktopCartSeperateItem";
import "./css/DesktopShoppingCartStyle.css";

export const DesktopShoppingCart = () => {
  const { user } = useContext(Store);
  const [loading, setLoading] = useState<Boolean>(false);
  const [cartItemLoading, setCartItemLoading] = useState<Boolean>(false);
  const [cartItem, setCartItem] = useState<any>([]);
  const [item, setTotalItem] = useState(0);

  const showCartData = async () => {
    setLoading(true);
    const cartItem = await getData("cart");
    setCartItem(cartItem);
    setTotalItem(cartItem.length);
    setLoading(false);
  };

  useEffect(() => {
    showCartData();
  }, [item]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (user && user.id) ? (
        (!cartItem.length) ? (
          <DesktopEmptyCart
            heading="Empty Cart"
            text="There is no item in the Cart"
          />
        ) : (
        <div className="desktopShoppingCart">
          <Row>
            <Col span={16}>
              <div>
              {cartItemLoading ? <Loading /> : (
                cartItem.map((product, index) => {
                  return (
                    <DesktopCartSeperateItem 
                      product={product}  
                      setTotalItem={setTotalItem}
                      setCartItem={setCartItem}
                      setCartItemLoading={setCartItemLoading}
                      key={index}
                    />
                  );
                })
              )}
                <div className="placeOrderBtn">
                  <Button
                    onClick={() => alert('Order Placed')}
                    >
                    Place Order
                  </Button>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className="totalPriceItem">
                <h3>PRICE DETAILS</h3>
                <div className="price">
                  <div className="details">
                    <h4>Price</h4>
                    <h4>1500</h4>
                  </div>
                  <div className="details">
                    <h4>Price</h4>
                    <h4>1500</h4>
                  </div>
                  <div className="details delivery">
                    <h4>Delivery Charges</h4>
                    <h4>FREE</h4>
                  </div>
                  <div className="totalPrice">
                    <h4>Total Amount</h4>
                    <h4>1500</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        )
      ) : (
        <DesktopEmptyCart
          heading="Missing Cart items?"
          text="Login to see the items you added previously"
        />
      )}
    </div>
  );
};
