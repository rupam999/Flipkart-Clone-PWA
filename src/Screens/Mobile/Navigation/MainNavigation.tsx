import React from "react";
import { Route, Switch } from "react-router-dom";
import { BottomTabBar, SearchNavigation } from "../Navigation";
import {
    ShoppingCart,
    ProductDetails,
    AllCategories,
    OfferZone,
    Error404,
} from "../Content";

export const MainNavigation = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/user" render={() => <BottomTabBar />} />
                <Route exact path="/user/offer" render={() => <OfferZone />} />
                <Route
                    exact
                    path="/user/all-categories"
                    render={() => <AllCategories />}
                />
                <Route path="/user/product" render={() => <ProductDetails />} />
                <Route
                    path="/user/search"
                    render={() => <SearchNavigation />}
                />
                <Route
                    exact
                    path="/user/cart"
                    render={() => <ShoppingCart />}
                />
                <Route path="*" render={() => <Error404 />} />
            </Switch>
        </React.Fragment>
    );
};
