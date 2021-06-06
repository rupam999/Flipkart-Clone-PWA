import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import DesktopNavbar from "../Components/DesktopNavbar";
import DesktopFooter from "../Components/DesktopFooter";
import {
  DesktopHomeScreen,
  DesktopSearchResult,
  DesktopDetailProductPage,
  DesktopShoppingCart,
  DesktopDealsOfTheDay,
  DesktopPayment,
} from ".";

const { Content } = Layout;

export const DesktopHome = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <DesktopNavbar />
      <Content>
        <Switch>
          <Route exact path="/" component={DesktopHomeScreen} />
          <Route exact path="/DesktopHome" component={DesktopHomeScreen} />
          <Route
            exact
            path="/Search/:searchName"
            component={DesktopSearchResult}
          />
          <Route
            exact
            path="/Search/fullDetails/:productId"
            component={DesktopDetailProductPage}
          />
          <Route exact path="/DealsOfTheDay" component={DesktopDealsOfTheDay} />
          <Route exact path="/DesktopCart" component={DesktopShoppingCart} />
          <Route exact path="/DesktopPayment" component={DesktopPayment} />
        </Switch>
      </Content>
      <DesktopFooter />
    </Layout>
  );
};
