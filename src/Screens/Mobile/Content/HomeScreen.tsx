import React, { useState } from "react";
import { Button } from "antd";
import { Drawer, Flex } from "antd-mobile";
import { HomeScreenHeader, SearchBoxSecondHeader } from "../Header";
import WindowDimensions from "../../../components/WindowDimensions";
import DrawerContent from "./components/DrawerContent";
import HomeScreenSlide from "./components/HomeScreenSlide";
import Colors from "../../../utils/Colors";
// Images
import Masala45P from "../../../assets/Masala45P.jpg";
import OrganicStaples25P from "../../../assets/OrganicStaples25P.jpg";
import WholeSpices45P from "../../../assets/WholeSpices45P.jpg";
import "./css/HomeScreenStyle.css";

const Top3SectionOffers = () => (
    <div className="mainTopSectionWith3Content">
        <Flex>
            <Flex.Item>
                <img src={Masala45P} width={"100%"} />
            </Flex.Item>
            <Flex.Item>
                <img src={WholeSpices45P} width={"100%"} />
            </Flex.Item>
            <Flex.Item>
                <img src={OrganicStaples25P} width={"100%"} />
            </Flex.Item>
        </Flex>
    </div>
);

const TopSection = () => (
    <div className="firstTopProductDiv">
        <div className="imageSection">
            <h3>Top Section</h3>
            <Button
                className="viewAllBtn"
                type="primary"
                style={{ backgroundColor: Colors.darkBlue() }}
            >
                <span>View</span>
            </Button>
            <div className="blurSection"></div>
        </div>
        <div
            style={{
                marginLeft: 8,
                marginRight: 8,
                backgroundColor: "#fff",
            }}
        >
            <Flex>
                <Flex.Item>
                    <div
                        style={{
                            borderRightWidth: 1,
                            borderRightColor: "red",
                            borderRightStyle: "solid",
                            height: "100%",
                        }}
                    >
                        <p
                            style={{
                                textAlign: "center",
                            }}
                        >
                            Dummy
                        </p>
                    </div>
                </Flex.Item>
                <Flex.Item>
                    <p
                        style={{
                            textAlign: "center",
                        }}
                    >
                        Dummy
                    </p>
                </Flex.Item>
            </Flex>
        </div>
    </div>
);

export const HomeScreen = () => {
    const [menu, toggle] = useState(false);
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
        <div className="homeSectionBody">
            <Drawer
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight }}
                enableDragHandle
                sidebar={sidebar}
                open={menu}
                onOpenChange={onOpenChange}
            >
                <HomeScreenHeader
                    menu={menu}
                    toggle={toggle}
                    pageHeading="E-commerce"
                />
                <SearchBoxSecondHeader />
                <div style={{ paddingTop: 101 }}>
                    <HomeScreenSlide />
                    <Top3SectionOffers />
                    <TopSection />
                </div>
            </Drawer>
        </div>
    );
};
