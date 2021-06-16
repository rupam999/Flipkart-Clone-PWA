import React from 'react';
import { Row, Col } from 'antd';
import DesktopHomeSingleProduct from './DesktopHomeSingleProduct';

const TopDeals = () => {
	return (
		<div
			className="AllTheDealsOfTheDayProducts"
			style={{
				paddingTop: 25,
				paddingBottom: 25,
			}}
		>
			<Row>
				<Col span={4}>
					<DesktopHomeSingleProduct />
				</Col>
				<Col span={4}>
					<DesktopHomeSingleProduct />
				</Col>
				<Col span={4}>
					<DesktopHomeSingleProduct />
				</Col>
				<Col span={4}>
					<DesktopHomeSingleProduct />
				</Col>
				<Col span={4}>
					<DesktopHomeSingleProduct />
				</Col>
				<Col span={4}>
					<DesktopHomeSingleProduct />
				</Col>
				<Col span={4}>
					<DesktopHomeSingleProduct />
				</Col>
				<Col span={4}>
					<DesktopHomeSingleProduct />
				</Col>
				<Col span={4}>
					<DesktopHomeSingleProduct />
				</Col>
				<Col span={4}>
					<DesktopHomeSingleProduct />
				</Col>
				<Col span={4}>
					<DesktopHomeSingleProduct />
				</Col>
				<Col span={4}>
					<DesktopHomeSingleProduct />
				</Col>
			</Row>
		</div>
	);
};

export default TopDeals;
