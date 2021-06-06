import React from "react";
import { NavBar, Icon } from "antd-mobile";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { pathCheck } from "../../Helpers/Utilities";
import Colors from "../../../utils/Colors";
import "./css/HomeScreenHeaderStyle.css";
import "./css/HeaderStyle.css";

export const SearchHeader = (props) => {
  const { searchData } = props;
  const history = useHistory();
  const onOpenChange = () => {
    history.goBack();
  };

  return (
    <div className="topFixedHeader searchHeading">
      <NavBar
        mode="light"
        style={{ backgroundColor: Colors.darkBlue() }}
        icon={
          <Icon
            type={"left"}
            className="homeScreenIconStyle"
            style={{ color: Colors.headerIconColor() }}
          />
        }
        onLeftClick={onOpenChange}
        rightContent={[
          <SearchOutlined
            key="0"
            className="homeScreenIconStyle marginRight20pt"
            onClick={() => {
              if (pathCheck(history, "/user/search/edit")) {
                history.push("/user/search/edit", {
                  searchData: searchData,
                });
              }
            }}
            style={{
              color: Colors.headerIconColor(),
              fontSize: 20,
            }}
          />,
          <HeartOutlined
            key="1"
            className="homeScreenIconStyle marginRight20pt"
            onClick={() => {
              // if (pathCheck(history, "/user/cart")) {
              //     history.push("/user/cart");
              // }
            }}
            style={{
              color: Colors.headerIconColor(),
              fontSize: 20,
            }}
          />,
          <ShoppingCartOutlined
            key="2"
            className="homeScreenIconStyle"
            onClick={() => {
              if (pathCheck(history, "/user/cart")) {
                history.push("/user/cart");
              }
            }}
            style={{
              color: Colors.headerIconColor(),
              fontSize: 20,
            }}
          />,
        ]}
      >
        <span style={{ color: Colors.white(), fontWeight: 600 }}>
          {searchData}
        </span>
      </NavBar>
    </div>
  );
};
