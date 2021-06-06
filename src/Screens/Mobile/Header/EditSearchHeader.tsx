import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
import { NavBar, Icon, Toast, ActivityIndicator } from "antd-mobile";
import { useHistory, useLocation } from "react-router-dom";
import { pathCheck } from "../../Helpers/Utilities";
import Colors from "../../../utils/Colors";
import "./css/HomeScreenHeaderStyle.css";
import "./css/HeaderStyle.css";

export const EditSearchHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  const location = useLocation();
  let searchText;
  useEffect(() => {
    searchText = location.state;
    if (searchText) {
      setSearchQuery(searchText.searchData);
    }
  });
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const onOpenChange = () => {
    history.goBack();
  };

  const onFinish = (values) => {
    if (values.searchText === "" || values.searchText === undefined) {
      Toast.offline("Please enter a text !!!", 1);
    } else {
      if (pathCheck(history, "/user/search")) {
        history.push(`/user/search?q=${values.searchText}`);
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="topFixedHeader editSearchHeaderDiv">
      <NavBar
        mode="light"
        style={{ backgroundColor: Colors.white() }}
        icon={
          <Icon
            type={"left"}
            className="homeScreenIconStyle"
            style={{ color: Colors.black() }}
          />
        }
        onLeftClick={onOpenChange}
      >
        {searchQuery ? (
          <Form
            {...layout}
            name="basic"
            initialValues={{ searchText: searchQuery }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item name="searchText">
              <Input
                type="search"
                size="large"
                placeholder="&nbsp;Search for Products"
                style={{
                  width: "100%",
                  borderRadius: 3,
                  borderWidth: 0,
                }}
              />
            </Form.Item>
          </Form>
        ) : (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: document.documentElement.clientHeight * 0.6,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" />
          </div>
        )}
      </NavBar>
    </div>
  );
};
