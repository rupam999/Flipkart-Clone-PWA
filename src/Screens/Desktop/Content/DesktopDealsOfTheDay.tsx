import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TopDeals from '../Components/TopDeals';
import './css/DesktopDealsOfTheDayStyle.css';

export const DesktopDealsOfTheDay = () => {
	const history = useHistory();
	const [searchData, setSearchData] = useState('');

	const checkPara = () => {
		try {
			const hash = history.location.hash;
			const search = history.location.search;
			if (hash.length && search.length) {
				const mainHash = atob(hash.replace('#', '').toString());
				const constant = history.location.pathname.toString();

				if (mainHash === constant) {
					const searchString = atob(search.replace('?', '').toString());
					setSearchData(searchString);
				}
			} else {
				setSearchData('Deals of The Day');
			}
		} catch (error) {
			// console.log('error', error);
			history.push('/DealsOfTheDay');
		}
	};

	useEffect(() => {
		checkPara();
	});

	return (
		<div className="DealsOfTheDayContainer">
			<div className="DealsOfTheTitle">
				<h3>{searchData}</h3>
			</div>
			<TopDeals />
		</div>
	);
};
