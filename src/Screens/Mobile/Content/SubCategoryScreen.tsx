import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Flex } from "antd-mobile";
import { userCheck } from "../../../components/userCheck";
import { Store } from "../../../Context/Store";
import { getData } from "../../../localStorage/getData";
import { HeaderWithBack } from "../Header";
import Loader from "../components/mobileLoader";
// Images
import OFF30 from "../../../assets/flat30P.jpg";
import OFF40 from "../../../assets/flat40P.jpg";
import OFF50 from "../../../assets/flat50P.jpg";
import Buy1Get1 from "../../../assets/Buy1Get1.jpg";
import MonthPick from "../../../assets/MonthPick.jpg";
import SelfClearenceDeal from "../../../assets/SelfClearenceDeal.jpg";

const SuperOfferSection = () => {
    return (
        <div style={{ width: "100%" }}>
            <div
                style={{
                    padding: 15,
                    paddingLeft: 20,
                    backgroundColor: "#fff",
                }}
            >
                <h3
                    style={{
                        textTransform: "uppercase",
                        fontSize: 16,
                        marginBottom: 0,
                        color: "#000",
                    }}
                >
                    Shop By Offers
                </h3>
            </div>
            <div style={{ backgroundColor: "#fff", paddingBottom: 15 }}>
                <Flex>
                    <Flex.Item>
                        <img src={OFF50} width={"100%"} />
                    </Flex.Item>
                    <Flex.Item>
                        <img src={OFF40} width={"100%"} />
                    </Flex.Item>
                    <Flex.Item>
                        <img src={OFF30} width={"100%"} />
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <img src={Buy1Get1} width={"100%"} />
                    </Flex.Item>
                    <Flex.Item>
                        <img src={MonthPick} width={"100%"} />
                    </Flex.Item>
                    <Flex.Item>
                        <img src={SelfClearenceDeal} width={"100%"} />
                    </Flex.Item>
                </Flex>
            </div>
        </div>
    );
};

export const SubCategoryScreen = () => {
    const { searchCategory }: any = useParams();
    const [loading, setLoading] = useState(true);
    const { setUser } = useContext(Store);
    const history = useHistory();
    const loggedUser = getData("user");

    useEffect(() => {
        if (userCheck(history)) {
            setUser(loggedUser);
            setLoading(false);
        }
    }, []);

    return (
        <React.Fragment>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <HeaderWithBack name={searchCategory} icon="left" />
                    <div style={{ marginTop: 45, zIndex: 1 }}>
                        {/* Shop by offers */}
                        <SuperOfferSection />
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};
