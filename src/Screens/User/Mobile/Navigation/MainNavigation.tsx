import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BottomTabBar } from '../Navigation';
import { ShoppingCart } from '../Content';

export const MainNavigation = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route 
                    exact 
                    path="/user" 
                    component={() => <BottomTabBar />} 
                />
                <Route
                    exact
                    path="/user/cart"
                    component={() => <ShoppingCart />}
                />
            </Switch>
        </React.Fragment>
    );
}