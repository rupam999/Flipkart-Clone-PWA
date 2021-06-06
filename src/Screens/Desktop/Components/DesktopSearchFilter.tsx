import React from "react";
import { Collapse, Checkbox } from "antd";
import "./css/DesktopSearchFilterStyle.css";

const { Panel } = Collapse;

const customerRating = (checkedValues) => {
  console.log("checked = ", checkedValues);
};

const customerRatingOptions = [
  { label: "4★ & above", value: "4" },
  { label: "3★ & above", value: "3" },
  { label: "2★ & above", value: "2" },
  { label: "1★ & above", value: "1" },
];

const DesktopSearchFilter = () => {
  return (
    <div className="searchLeftFilter">
      <div className="filterHeading">
        <h3>Filters</h3>
      </div>
      <div className="mainFilterSection">
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Customer Rating" key="1">
            <Checkbox.Group
              options={customerRatingOptions}
              onChange={customerRating}
            />
          </Panel>

          <Panel header="Sample Filter" key="2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              repellat dignissimos nesciunt earum, ad ratione sed id optio rem
              cumque. Explicabo id sint earum deleniti recusandae illum
              voluptatum quis dolorem.
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default DesktopSearchFilter;
