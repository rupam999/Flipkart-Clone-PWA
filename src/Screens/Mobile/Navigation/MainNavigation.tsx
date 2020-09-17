import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BottomTabBar, SearchNavigation } from '../Navigation';
import { 
    ShoppingCart, ProductDetails
} from '../Content';

export const MainNavigation = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route 
                    exact 
                    path="/user" 
                    render={() => <BottomTabBar />} 
                />
                <Route
                    path="/user/product"
                    render={() => <ProductDetails />}
                />
                <Route
                    path="/user/search"
                    render={() => <SearchNavigation />}
                />
                <Route
                    exact
                    path="/user/cart"
                    render={() => <ShoppingCart />}
                />
            </Switch>
        </React.Fragment>
    );
}