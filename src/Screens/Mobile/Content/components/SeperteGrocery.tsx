import React from "react";
import { useHistory } from "react-router-dom";
import { List, Stepper } from "antd-mobile";
import { TagsOutlined } from "@ant-design/icons";
import "./css/SeperateGroceryStyle.css";
import { pathCheck } from "../../../Helpers/Utilities";

const SeperateGrocery = (props) => {
    const { productInformation } = props;
    const history = useHistory();

    const sendToDetailsPage = () => {
        if (pathCheck(history, "/user/product")) {
            history.push("/user/product", { productInformation });
        }
    };

    const getDiscountAmount = (mrp: number, actual: number) =>
        Math.floor(((mrp - actual) / mrp) * 100);

    return (
        <div className="mainDiv">
            <div className="parentDivOf3SubDiv">
                <div className="productImageDiv" onClick={sendToDetailsPage}>
                    <img
                        src="https://rukminim1.flixcart.com/image/300/350/j8rnpu80/pulses/q/g/w/500-toor-dal-arhar-dal-desi-arhar-dal-un-branded-original-imaeymjgrjw8xgvw.jpeg?q=90"
                        width="90%"
                        className="productImage"
                    />
                </div>

                <div className="productDescription">
                    <h3 className="productHeading" onClick={sendToDetailsPage}>
                        {productInformation.organic ? (
                            <span>
                                {productInformation.name}{" "}
                                <span>&nbsp;(Organic)</span>
                            </span>
                        ) : (
                            <span>{productInformation.name}</span>
                        )}
                    </h3>
                    <h4 onClick={sendToDetailsPage}>
                        <span className="mainPrice">
                            &#8377; {productInformation.price}{" "}
                        </span>
                        <span className="mrpPrice">
                            {" "}
                            {productInformation.mrp}
                        </span>
                        {Math.floor(
                            Number(productInformation.mrp) -
                                Number(productInformation.price)
                        ) ? (
                            <span className="offPercentage">
                                {getDiscountAmount(
                                    Number(productInformation.mrp),
                                    Number(productInformation.price)
                                )}
                                % off
                            </span>
                        ) : null}
                    </h4>
                    <div className="productQuantityDiv">
                        <h4 className="productQuantity">
                            {productInformation.quantity}
                        </h4>
                    </div>
                </div>

                <div className="addToCartDiv">
                    <div className="userProductQuantityDiv">
                        <div className="addBtn">
                            <h3 className="btnText">Add</h3>
                        </div>
                        <div className="plusBtn">
                            <h3 className="btnText">+</h3>
                        </div>
                    </div>
                    {/* 
                        <List>
                        <List.Item
                            wrap
                            extra={
                                <Stepper
                                    // style={{ width: '100%', minWidth: '100px' }}
                                    showNumber
                                    max={10}
                                    min={1}
                                    value={3}
                                    // onChange={this.onChange}
                                />}
                            >

                                {/* .am-stepper {width} */}
                    {/* </List.Item> */}
                    {/* </List> */}
                    {/* */}
                </div>
            </div>

            <div className="offerTagline">
                <h3 className="offerTag">
                    <span>
                        <TagsOutlined />
                        &nbsp;
                    </span>
                    Buy More And Save More
                </h3>
            </div>
        </div>
    );
};

export default SeperateGrocery;
