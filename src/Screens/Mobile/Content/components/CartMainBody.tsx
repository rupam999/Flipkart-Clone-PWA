import React, { useState } from "react";
import "./css/ShoppingCartStyle.css";
import IMG from "../../../../assets/EmptyCart.png";
import Colors from "../../../../utils/Colors";

const CartMainBody = () => {
    const [cartItem, setCartItem] = useState([]);
    return (
        <div className="shoppingCartBody">
            {cartItem.length === 0 ? (
                <div
                    style={{
                        minHeight: document.documentElement.clientHeight,
                        backgroundColor: Colors.lightGray(),
                        width: "100%",
                        position: "fixed",
                    }}
                >
                    <img src={IMG} className="emptyCartImage" />
                    <h2 className="mainHeadingForEmptyCart">
                        There is no item in the Cart!
                    </h2>
                </div>
            ) : null}
        </div>
    );
};

export default CartMainBody;
