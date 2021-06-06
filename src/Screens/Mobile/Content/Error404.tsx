import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { HeaderWithTitleOnly } from "../Header";
import { pathCheck } from "../../Helpers/Utilities";
import Colors from "../../../utils/Colors";
import ERROR_404 from "../../../assets/404.png";
import "./css/Error404.css";

export const Error404 = () => {
  const history = useHistory();

  const sendBackToHomePage = () => {
    if (pathCheck(history, "/")) {
      history.push("/");
    }
  };

  return (
    <div>
      <HeaderWithTitleOnly title="E-commerce" curve={true} />
      <div
        className="extraHeader"
        style={{ backgroundColor: Colors.darkBlue() }}
      ></div>
      <div className="mainContent" style={{ backgroundColor: Colors.white() }}>
        <div>
          <img src={ERROR_404} width={"100%"} />
          <h3 className="mainTitle">
            Unfortunately the page you are looking for has been moved or deleted
          </h3>
          <Button
            type="default"
            className="goBackBtn"
            style={{ backgroundColor: Colors.darkBlue() }}
            onClick={sendBackToHomePage}
          >
            <span>Go to Homepage</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
