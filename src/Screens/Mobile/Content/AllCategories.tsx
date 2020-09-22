import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Collapse } from "antd";
import { Flex, Grid } from "antd-mobile";
import { userCheck } from "../../../components/userCheck";
import { Store } from "../../../Context/Store";
import { getData } from "../../../localStorage/getData";
import { getCategories } from "../../../api/getCategories";
import Loader from "../components/mobileLoader";
import { HeaderWithBack } from "../Header";
import { pathCheck } from "../../Helpers/Utilities";
const { Panel } = Collapse;

export const AllCategories = () => {
    const [loading, setLoading] = useState(true);
    const [allCategoriesData, setAllCategoriesData] = useState([]);
    const [category, setCategory] = useState([]);
    const { setUser } = useContext(Store);
    const history = useHistory();
    const loggedUser = getData("user");

    useEffect(() => {
        if (userCheck(history)) {
            setUser(loggedUser);
            getCategories()
                .then((res) => {
                    if (res !== 1) {
                        setAllCategoriesData(res);
                        setCategory(
                            res.map((item) => {
                                return item.category;
                            })
                        );
                    } else {
                        console.log("ERROR");
                    }
                })
                .catch();
            setLoading(false);
        }
    }, []);

    const navigateToSeperateCategory = (subCategory: string) => {
        if (pathCheck(history, `/user/search/${subCategory}`)) {
            history.push(`/user/search/${subCategory}`);
        }
    };

    const allCategoryForGrid = category.map((category) => {
        const categoryIndex = allCategoriesData.findIndex(
            (item) => item.category === category
        );
        const subCategoryData =
            categoryIndex === -1
                ? []
                : allCategoriesData[categoryIndex].sub_category.split(",");

        const showSubCategoryData = subCategoryData.map((item, index) => (
            <div onClick={() => alert(item)} key={index}>
                <p>{item}</p>
            </div>
        ));

        return (
            // <div onClick={() => navigateToSeperateCategory(category)}>
            <Panel header={category} key={category}>
                {showSubCategoryData}
            </Panel>
            // </div>
        );
    });

    return (
        <React.Fragment>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <HeaderWithBack name="All Categories" icon="left" />
                    <div style={{ marginTop: 45 }}>
                        <div>
                            <Collapse ghost>{allCategoryForGrid}</Collapse>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};
