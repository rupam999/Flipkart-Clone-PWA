import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import Colors from '../../../../utils/Colors';
import './css/DrawerTopSectionStyle.css';

const DrawerTopSection = () => {
    return(
        <div 
            className="DrawerUserInfo"
            style={{backgroundColor: Colors.darkBlue()}}
            >
            <p className="topMainDetailsPara">
                <span><UserOutlined className="topMainDetailsIcon" /></span>
                <span>Rupam Chakraborty</span>
            </p>
        </div>
    );
}

export default DrawerTopSection;