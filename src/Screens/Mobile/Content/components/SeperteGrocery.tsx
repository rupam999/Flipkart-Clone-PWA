import React from 'react';
import { TagsOutlined } from '@ant-design/icons';
import './css/SeperateGroceryStyle.css';

const SeperateGrocery = () => {
    return(
        <div className="mainDiv">
            <div className="parentDivOf3SubDiv">  

                <div className="productImageDiv">
                    <img 
                        src="https://rukminim1.flixcart.com/image/300/350/j8rnpu80/pulses/q/g/w/500-toor-dal-arhar-dal-desi-arhar-dal-un-branded-original-imaeymjgrjw8xgvw.jpeg?q=90"
                        width='90%'
                        className="productImage"
                    />
                </div>

                <div className="productDescription">
                    <h3 className="productHeading">Tool Dal</h3>
                    <h4>
                        <span className="mainPrice">&#8377; 250 </span> 
                        <span className="mrpPrice"> 500 </span>
                        <span className="offPercentage"> 36% off</span>
                    </h4>
                    <div className="productQuantityDiv">
                        <h4 className="productQuantity">1 kg</h4>
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
                </div>

            </div>

            <div className="offerTagline">
                <h3 className="offerTag"><span><TagsOutlined />&nbsp;</span>Buy More And Save More</h3>
            </div>

        </div>
    );
}

export default SeperateGrocery;