import React, { useEffect, useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Input, Image } from "antd";
import { AimOutlined } from "@ant-design/icons";
import { userCheck } from "../../../components/userCheck";
import { Store } from "../../../Context/Store";
import { getData } from "../../../localStorage/getData";
import Colors from "../../../utils/Colors";
import Loader from "../components/mobileLoader";
import { HeaderWithoutTitle } from "../Header/HeaderWithoutTitle";
import "./css/ProductDetailsStyle.css";

export const ProductDetails = () => {
    const [loading, setLoading] = useState(true);
    const [productDetails, setProductDetails] = useState<any>();
    const { setUser } = useContext(Store);
    const history = useHistory();
    const location = useLocation();
    const loggedUser = getData("user");

    useEffect(() => {
        let product;
        if (userCheck(history) && location.state) {
            setUser(loggedUser);
            product = location.state;
            setProductDetails(product.productInformation);
            setLoading(false);
        } else if (userCheck(history) && !location.state) {
            history.push("/user");
        }
    }, []);

    const calculateDiscount = (mrp: number, actual: number) =>
        Math.floor(((mrp - actual) / mrp) * 100);

    return (
        <React.Fragment>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <HeaderWithoutTitle
                        left="left"
                        productName={productDetails.name}
                    />
                    <div
                        style={{
                            marginTop: 45,
                            width: "100%",
                            backgroundColor: Colors.white(),
                            paddingTop: 50,
                            paddingLeft: 15,
                            paddingRight: 15,
                        }}
                    >
                        <div
                            style={{
                                height: 400,
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                src="https://rukminim1.flixcart.com/image/1150/1150/k70spzk0/nut-dry-fruit/h/h/h/100-californian-pouch-flipkart-supermart-select-original-imafpck6zmdfygs5.jpeg?q=90"
                                width={"80%"}
                                height={400}
                            />
                        </div>
                        <div className="productNameAndPrice">
                            <h2
                                className="productHeading"
                                style={{ color: Colors.fontColor() }}
                            >
                                {productDetails.name}
                            </h2>
                            <h3 className="productPrice">
                                <span
                                    className="actutalSellingPrice"
                                    style={{ color: Colors.fontColor() }}
                                >
                                    &#8377; {productDetails.price}
                                </span>
                                <span
                                    className="mrpPrice"
                                    style={{ color: Colors.fontGray() }}
                                >
                                    {productDetails.mrp}
                                </span>
                                {Math.floor(
                                    Number(productDetails.mrp) -
                                        Number(productDetails.price)
                                ) ? (
                                    <span
                                        className="offPercantage"
                                        style={{ color: Colors.green() }}
                                    >
                                        {calculateDiscount(
                                            Number(productDetails.mrp),
                                            Number(productDetails.price)
                                        )}
                                        % off
                                    </span>
                                ) : null}
                            </h3>
                        </div>
                    </div>

                    {/* Zipcode Check */}
                    <div className="checkZipCode">
                        <h2>Delivery</h2>
                        <div className="zipcodeForm">
                            <Input
                                type="number"
                                size="large"
                                placeholder="&nbsp;Enter your Pincode"
                                prefix={<AimOutlined />}
                                className="zipcodeInputBox"
                                style={{ width: "100%", borderRadius: 3 }}
                            />
                            <Button htmlType="submit" className="checkBtn">
                                CHECK
                            </Button>
                        </div>
                        <div className="zipcodeInformation">
                            <h4>Usually delivered in same day</h4>
                            <h5>Enter pincode for exact delivery dates</h5>
                        </div>
                    </div>

                    <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>

                    {/* Bottom Bar */}
                    <div className="bottomFixedBar">
                        <div className="addToCart">
                            <h3>Add to Cart</h3>
                        </div>
                        <div className="buyNow">
                            <h3>Buy Now</h3>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};
