import React from 'react';
import { useParams } from 'react-router-dom';
import {Row, Col} from 'antd';
import DesktopFooter from '../Components/DesktopFooter';
import DesktopNavbar from '../Components/DesktopNavbar';
import DesktopSearchFilter from '../Components/DesktopSearchFilter';
import DesktopSingleProduct from '../Components/DesktopSingleProduct';
import './css/DesktopSearchResultStyle.css';

export const DesktopSearchResult = () => {
    const { searchName } = useParams<{ searchName: string }>();

    return(
        <div style={{width: '100%'}}>
            <DesktopNavbar search={searchName} />
            <div className="searchResult" style={{minHeight: 500, backgroundColor: '#F1F3F6'}}>
                <Row>
                    <Col span={5}>
                        <div className="leftSidePanel">
                            <DesktopSearchFilter />
                        </div>
                    </Col>
                    <Col span={19}>
                        <div className="rightSidePanel">
                            <DesktopSingleProduct />
                            <DesktopSingleProduct />
                            <DesktopSingleProduct />
                        </div>
                    </Col>
                </Row>
            </div>
            <DesktopFooter />
        </div>
    );
}