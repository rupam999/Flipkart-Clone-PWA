import React from "react";
import { FilterOutlined, SortDescendingOutlined } from "@ant-design/icons";
import Colors from "../../../../utils/Colors";
import "./css/SortAndFilter.css";

const SortAndFilter = () => {
    return (
        <div
            className="mainFixedDiv"
            style={{ backgroundColor: Colors.white() }}
        >
            <div className="sortDiv" onClick={() => alert("coming soon...")}>
                <h3 className="sortText">
                    <span className="iconStyle">
                        {<SortDescendingOutlined />}
                    </span>
                    <span>Sort</span>
                </h3>
            </div>
            <div className="filterDiv" onClick={() => alert("coming soon...")}>
                <h3 className="filterText">
                    <span className="iconStyle">{<FilterOutlined />}</span>
                    <span>Filter</span>
                </h3>
            </div>
        </div>
    );
};

export default SortAndFilter;
