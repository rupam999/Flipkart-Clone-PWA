import React from 'react';
import { Row, Col, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import DesktopHomeSingleProduct from './DesktopHomeSingleProduct';
import './css/DesktopHomeSuggestedForYouStyle.css';

const DesktopHomeSuggestedForYou = (props) => {
	const { heading, offer } = props;
	const history = useHistory();

	const fullEncrypted = (data: string) => {
		return btoa(`/DealsOfTheDay/${data}`);
	};

	const encrypted = (data: string) => {
		return btoa(`${data}`);
	};

	return (
		<div className="SuggestedProductHome">
			<Row>
				<Col span={24}>
					<div className="SuggestedProductHomeItem">
						<div className="heading">
							<h2>{heading}</h2>
							<Button
								onClick={() =>
									history.push(
										`/DealsOfTheDay/${offer}?${encrypted(
											heading
										)}#${fullEncrypted(offer)}`
									)
								}
							>
								View All
							</Button>
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'flex-start',
							}}
						>
							<DesktopHomeSingleProduct />
							<DesktopHomeSingleProduct />
							<DesktopHomeSingleProduct />
							<DesktopHomeSingleProduct />
							<DesktopHomeSingleProduct />
							<DesktopHomeSingleProduct />
							<DesktopHomeSingleProduct />
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default DesktopHomeSuggestedForYou;
