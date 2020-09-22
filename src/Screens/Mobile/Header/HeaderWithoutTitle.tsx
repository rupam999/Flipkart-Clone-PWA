import React from "react";
import { useHistory } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { pathCheck } from "../../Helpers/Utilities";
import Colors from "../../../utils/Colors";
import "./css/HomeScreenHeaderStyle.css";

export const HeaderWithoutTitle = (props) => {
    const { left, productName } = props;
    const history = useHistory();
    const onOpenChange = () => {
        history.goBack();
    };

    return (
        <div className="topFixedHeader">
            <NavBar
                mode="light"
                style={{ backgroundColor: Colors.darkBlue() }}
                icon={
                    <Icon
                        type={left}
                        className="homeScreenIconStyle"
                        style={{ color: Colors.headerIconColor() }}
                    />
                }
                onLeftClick={onOpenChange}
                rightContent={[
                    <SearchOutlined
                        key="0"
                        className="homeScreenIconStyle marginRight20pt"
                        onClick={() => {
                            if (pathCheck(history, "/user/search/edit")) {
                                history.push("/user/search/edit", {
                                    searchData: productName,
                                });
                            }
                        }}
                        style={{
                            color: Colors.headerIconColor(),
                            fontSize: 20,
                        }}
                    />,
                    <ShoppingCartOutlined
                        key="1"
                        className="homeScreenIconStyle"
                        onClick={() => {
                            if (pathCheck(history, "/user/cart")) {
                                history.push("/user/cart");
                            }
                        }}
                        style={{
                            color: Colors.headerIconColor(),
                            fontSize: 20,
                        }}
                    />,
                ]}
            ></NavBar>
        </div>
    );
};
