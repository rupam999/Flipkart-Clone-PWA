import React from "react";
import DesktopFooter from "../Components/DesktopFooter";
import DesktopNavbar from "../Components/DesktopNavbar";
import "./css/DesktopDealsOfTheDayStyle.css";

export const DesktopDealsOfTheDay = () => {
  return (
    <div>
      <div className="DealsOfTheDayContainer">
        <div className="DealsOfTheTitle">
          <h3>Deals of the Day</h3>
        </div>
        <div className="AllTheDealsOfTheDayProducts">
          <p>All the products</p>
          <p>All the products</p>
          <p>All the products</p>
          <p>All the products</p>
          <p>All the products</p>
          <p>All the products</p>
        </div>
      </div>
    </div>
  );
};
