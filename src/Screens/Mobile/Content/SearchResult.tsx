import React, { useEffect, useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import * as QueryString from "query-string";
import { Button } from "antd";
import { userCheck } from "../../../components/userCheck";
import { Store } from "../../../Context/Store";
import { getData } from "../../../localStorage/getData";
import { getProducts } from "../../../api/getProducts";
import { SearchHeader } from "../Header";
import SortAndFilter from "./components/SortAndFilter";
import { pathCheck } from "../../Helpers/Utilities";
import SeperateGrocery from "./components/SeperteGrocery";
import Loader from "../components/mobileLoader";
import EMPTY_RES from "../../../assets/Search404.png";
import "./components/css/SortAndFilter.css";
import "./css/SearchResultStyle.css";
import Colors from "../../../utils/Colors";

export const SearchResult = (props) => {
    const location = useLocation();
    const history = useHistory();
    const { setUser } = useContext(Store);
    const loggedUser = getData("user");
    const query = QueryString.parse(location.search);
    const [loading, setLoading] = useState(true);
    const [pageLoader, setPageLoader] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    const getProductsData = async () => {
        setPageLoader(true);
        const response = await getProducts(query.q.toString());
        if (response !== 1) {
            setSearchResult(response);
            setPageLoader(false);
        }
    };

    useEffect(() => {
        if (userCheck(history)) {
            setUser(loggedUser);
            setLoading(false);
            getProductsData();
        }
    }, []);

    const EmptyResult = () => (
        <div
            className="searchDiv"
            style={{ top: document.documentElement.clientHeight * 0.3 }}
        >
            <img src={EMPTY_RES} alt="image" width={"30%"} className="emptyImage" />
            <p className="emptyResultParagraph">Sorry, no results found!</p>
            <h3 className="emptyResultHeading">
                Please check the spelling or try searching for something else
            </h3>
            <Button
                type="default"
                className="emptyResultBtn"
                style={{ backgroundColor: Colors.darkBlue() }}
                onClick={() => {
                    if (pathCheck(history, "/user/search/edit")) {
                        history.push("/user/search/edit", {
                            searchData: query.q,
                        });
                    }
                }}
            >
                <span>Search Again</span>
            </Button>
        </div>
    );

    return (
        <React.Fragment>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <SearchHeader searchData={query.q} />
                    {pageLoader ? (
                        <Loader />
                    ) : (
                        <div>
                            <div style={{ marginTop: 90 }}>
                                {searchResult.length ? (
                                    <React.Fragment>
                                        <SortAndFilter />
                                        {searchResult.map(
                                            (productDetails, index) => (
                                                <SeperateGrocery
                                                    key={index}
                                                    productInformation={
                                                        productDetails
                                                    }
                                                />
                                            )
                                        )}
                                    </React.Fragment>
                                ) : (
                                    <EmptyResult />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </React.Fragment>
    );
};
