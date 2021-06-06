import React from "react";
import DesktopFooter from "../Components/DesktopFooter";
import DesktopHome3Banner from "../Components/DesktopHome3Banner";
import DesktopHomeDealsOfTheDay from "../Components/DesktopHomeDealsOfTheDay";
import DesktopHomeSuggestedForYou from "../Components/DesktopHomeSuggestedForYou";
import DesktopNavbar from "../Components/DesktopNavbar";
import DesktopSlider from "../Components/DesktopSlider";
import "../css/HomeScreenStyle.css";

export const DesktopHomeScreen = () => {
  return (
    <div className="homeScreen">
      <div style={{ backgroundColor: "#F1F3F6" }}>
        <DesktopSlider />
        <DesktopHomeDealsOfTheDay />
        <DesktopHome3Banner />
        <DesktopHomeSuggestedForYou heading="Top Rated Product For You" />
        <DesktopHome3Banner />
        <DesktopHomeSuggestedForYou heading="Top Deals on Devices" />
      </div>
    </div>
  );
};
