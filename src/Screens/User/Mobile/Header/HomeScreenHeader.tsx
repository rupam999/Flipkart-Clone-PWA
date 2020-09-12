import React from 'react';
import { NavBar } from 'antd-mobile';
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { pathCheck } from "../../Helpers/Utilities";
import Colors from '../../../../utils/Colors';
import './css/HomeScreenHeaderStyle.css';

export const HomeScreenHeaer = (props) => {
    const { menu, toggle } = props;
    const history = useHistory();
    const onOpenChange = () => {
        toggle(!menu);
    }
    
    return (
        <div className="topFixedHeader">
            <NavBar
                mode="light"
                style={{backgroundColor: Colors.darkBlue()}}
                icon={
                    <MenuOutlined 
                        className="homeScreenIconStyle" 
                        style={{color: Colors.headerIconColor()}} 
                    />}
                onLeftClick={onOpenChange}
                rightContent={[
                    <ShoppingCartOutlined 
                        key="0" 
                        className="homeScreenIconStyle" 
                        onClick={() => {
                            if (pathCheck(history, "/user/cart")) {
                                history.push("/user/cart");
                            }
                        }}
                        style={{color: Colors.headerIconColor(), fontSize: 20}} 
                    />,
                ]}
                ><span style={{color: Colors.white(), fontWeight: 600}}>E-commerce</span>
            </NavBar>
            
        </div>
    );
};
