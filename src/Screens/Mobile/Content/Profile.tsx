import React, { useState } from "react";
import { Drawer, List } from "antd-mobile";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  AimOutlined,
  EditOutlined,
  DeleteOutlined,
  BugOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { getData } from "../../../localStorage/getData";
import { HomeScreenHeader } from "../Header";
import WindowDimensions from "../../../components/WindowDimensions";
import DrawerContent from "./components/DrawerContent";
import Colors from "../../../utils/Colors";
import PROFILE_AVATER from "../../../assets/Profile.png";
import "./css/ProfileStyle.css";
const Item = List.Item;

export const Profile = () => {
  const [menu, toggle] = useState(false);
  const user = getData("user");
  const { width } = WindowDimensions();

  const onOpenChange = () => {
    toggle(!menu);
  };

  const sidebar = (
    <div style={{ width: width * 0.75, maxWidth: 290 }}>
      <DrawerContent />
    </div>
  );

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
      }}
    >
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        // contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={menu}
        onOpenChange={onOpenChange}
      >
        <HomeScreenHeader
          menu={menu}
          toggle={toggle}
          pageHeading="Profile"
          curve={true}
        />
        <div className="mainContentProfile">
          <div
            className="profileTopSection"
            style={{ backgroundColor: Colors.darkBlue() }}
          >
            <img
              src={PROFILE_AVATER}
              alt="profile avater"
              width={80}
              height={80}
              className="profileAvater"
            />
            <div className="profileBasicInfo">
              <h3>{user.name}</h3>
              <h4>{user.phone}</h4>
            </div>
          </div>
          <div className="mainOptions">
            <List
              renderHeader={() => "Account Settings & Orders"}
              className="my-list"
            >
              <Item
                thumb={
                  <span className="profileIcon">
                    <ShoppingCartOutlined />
                  </span>
                }
                arrow="horizontal"
                onClick={() => {}}
              >
                <span>My Shopping Cart</span>
              </Item>

              <Item
                thumb={
                  <span className="profileIcon">
                    <ShoppingOutlined />
                  </span>
                }
                arrow="horizontal"
                onClick={() => {}}
              >
                <span>My Orders</span>
              </Item>

              <Item
                thumb={
                  <span className="profileIcon">
                    <AimOutlined />
                  </span>
                }
                arrow="horizontal"
                onClick={() => {}}
              >
                <span>My Address</span>
              </Item>

              <Item
                thumb={
                  <span className="profileIcon">
                    <EditOutlined />
                  </span>
                }
                arrow="horizontal"
                onClick={() => {}}
              >
                <span>Edit Profile</span>
              </Item>

              <Item
                thumb={
                  <span className="profileIcon">
                    <DeleteOutlined />
                  </span>
                }
                arrow="horizontal"
                onClick={() => {}}
              >
                <span>Delete Account</span>
              </Item>

              <Item
                thumb={
                  <span className="profileIcon">
                    <BugOutlined />
                  </span>
                }
                arrow="horizontal"
                onClick={() => {}}
              >
                <span>Report Bug</span>
              </Item>

              <Item
                thumb={
                  <span className="profileIcon">
                    <LogoutOutlined />
                  </span>
                }
                arrow="horizontal"
                onClick={() => {}}
              >
                <span>Logout</span>
              </Item>
            </List>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
