import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BottomTabBar } from '../Navigation';
import { 
    SearchResult, ShoppingCart 
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
                    exact
                    path="/user/search"
                    component={() => <SearchResult />}
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