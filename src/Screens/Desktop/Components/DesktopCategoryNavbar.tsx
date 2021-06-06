import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Menu, Dropdown, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./css/DesktopCategoryNavbarStyle.css";

const DesktopCategoryNavbar = () => {
  const history = useHistory();

  const menu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <div className="desktopCatrgoryNavbar">
      <Row>
        <Col span={3} className="centerStyle">
          <a
            className="ant-dropdown-link subMenuLinks"
            onClick={(e) => {
              e.preventDefault();
              history.push("/DealsOfTheDay");
            }}
          >
            Top Offers
          </a>
        </Col>
        <Col span={3} className="centerStyle">
          <Dropdown overlay={menu} placement="bottomLeft">
            <a
              className="ant-dropdown-link subMenuLinks"
              onClick={(e) => e.preventDefault()}
            >
              Mobiles <DownOutlined />
            </a>
          </Dropdown>
        </Col>
        <Col span={3} className="centerStyle">
          <Dropdown overlay={menu} placement="bottomCenter">
            <a
              className="ant-dropdown-link subMenuLinks"
              onClick={(e) => e.preventDefault()}
            >
              Electronics <DownOutlined />
            </a>
          </Dropdown>
        </Col>
        <Col span={3} className="centerStyle">
          <Dropdown overlay={menu} placement="bottomCenter">
            <a
              className="ant-dropdown-link subMenuLinks"
              onClick={(e) => e.preventDefault()}
            >
              Home <DownOutlined />
            </a>
          </Dropdown>
        </Col>
        <Col span={3} className="centerStyle">
          <Dropdown overlay={menu} placement="bottomCenter">
            <a
              className="ant-dropdown-link subMenuLinks"
              onClick={(e) => e.preventDefault()}
            >
              Appliances <DownOutlined />
            </a>
          </Dropdown>
        </Col>
        <Col span={3} className="centerStyle">
          <Dropdown overlay={menu} placement="bottomCenter">
            <a
              className="ant-dropdown-link subMenuLinks"
              onClick={(e) => e.preventDefault()}
            >
              Fashion <DownOutlined />
            </a>
          </Dropdown>
        </Col>
        <Col span={3} className="centerStyle">
          <Dropdown overlay={menu} placement="bottomRight">
            <a
              className="ant-dropdown-link subMenuLinks"
              onClick={(e) => e.preventDefault()}
            >
              Grocery <DownOutlined />
            </a>
          </Dropdown>
        </Col>
        <Col span={3} className="centerStyle">
          <a
            className="ant-dropdown-link subMenuLinks"
            onClick={(e) => e.preventDefault()}
          >
            Best Seller
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default DesktopCategoryNavbar;
