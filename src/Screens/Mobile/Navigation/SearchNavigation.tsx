import React from 'react';
import { Route, Switch } from "react-router-dom";
import { 
    SearchResult, EditSearchBar, SubCategoryScreen
} from '../Content';

export const SearchNavigation = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route
                    exact
                    path="/user/search"
                    render={() => <SearchResult />}
                />
                <Route
                    exact
                    path="/user/search/:searchCategory"
                    render={() => <SubCategoryScreen />}
                />
                <Route
                    exact
                    path="/user/search/edit"
                    render={() => <EditSearchBar />}
                />
            </Switch>
        </React.Fragment>
    );
}