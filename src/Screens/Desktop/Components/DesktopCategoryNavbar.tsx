import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Menu, Dropdown, message } from 'antd';
import './css/DesktopCategoryNavbarStyle.css';

const DesktopCategoryNavbar = () => {
	const history = useHistory();

	const menu = (
		<Menu>
			{/* <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item> */}
		</Menu>
	);

	const fullEncrypted = (data: string) => {
		return btoa(`/DealsOfTheDay/${data}`);
	};

	const encrypted = (data: string) => {
		return btoa(`${data}`);
	};

	const sendToSeperatePage = (title: string) => {
		history.push(
			`/DealsOfTheDay/topProduct?${encrypted(title)}#${fullEncrypted(
				'topProduct'
			)}`
		);
	};

	return (
		<div className="desktopCatrgoryNavbar">
			<Row>
				<Col span={3} className="centerStyle">
					<a
						className="ant-dropdown-link subMenuLinks"
						onClick={(e) => {
							e.preventDefault();
							history.push('/DealsOfTheDay');
						}}
					>
						Top Offers
					</a>
				</Col>
				<Col span={3} className="centerStyle">
					{/* <Dropdown overlay={menu} placement="bottomLeft"> */}
					<a
						className="ant-dropdown-link subMenuLinks"
						onClick={(e) => {
							e.preventDefault();
							sendToSeperatePage('Mobiles');
						}}
					>
						Mobiles
					</a>
					{/* </Dropdown> */}
				</Col>
				<Col span={3} className="centerStyle">
					{/* <Dropdown overlay={menu} placement="bottomCenter"> */}
					<a
						className="ant-dropdown-link subMenuLinks"
						onClick={(e) => {
							e.preventDefault();
							sendToSeperatePage('Electronics');
						}}
					>
						Electronics
					</a>
					{/* </Dropdown> */}
				</Col>
				<Col span={3} className="centerStyle">
					{/* <Dropdown overlay={menu} placement="bottomCenter"> */}
					<a
						className="ant-dropdown-link subMenuLinks"
						onClick={(e) => {
							e.preventDefault();
							sendToSeperatePage('Home');
						}}
					>
						Home
					</a>
					{/* </Dropdown> */}
				</Col>
				<Col span={3} className="centerStyle">
					{/* <Dropdown overlay={menu} placement="bottomCenter"> */}
					<a
						className="ant-dropdown-link subMenuLinks"
						onClick={(e) => {
							e.preventDefault();
							sendToSeperatePage('Appliances');
						}}
					>
						Appliances
					</a>
					{/* </Dropdown> */}
				</Col>
				<Col span={3} className="centerStyle">
					{/* <Dropdown overlay={menu} placement="bottomCenter"> */}
					<a
						className="ant-dropdown-link subMenuLinks"
						onClick={(e) => {
							e.preventDefault();
							sendToSeperatePage('Fashion');
						}}
					>
						Fashion
					</a>
					{/* </Dropdown> */}
				</Col>
				<Col span={3} className="centerStyle">
					{/* <Dropdown overlay={menu} placement="bottomRight"> */}
					<a
						className="ant-dropdown-link subMenuLinks"
						onClick={(e) => {
							e.preventDefault();
							sendToSeperatePage('Grocery');
						}}
					>
						Grocery
					</a>
					{/* </Dropdown> */}
				</Col>
				<Col span={3} className="centerStyle">
					<a
						className="ant-dropdown-link subMenuLinks"
						onClick={(e) => {
							e.preventDefault();
							sendToSeperatePage('Best Seller');
						}}
					>
						Best Seller
					</a>
				</Col>
			</Row>
		</div>
	);
};

export default DesktopCategoryNavbar;
