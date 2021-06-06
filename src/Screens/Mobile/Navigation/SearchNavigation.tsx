import React from "react";
import { Route, Switch } from "react-router-dom";
import { SearchResult, EditSearchBar, Error404 } from "../Content";

export const SearchNavigation = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/user/search" render={() => <SearchResult />} />
        <Route
          exact
          path="/user/search/edit"
          render={() => <EditSearchBar />}
        />
        <Route path="*" render={() => <Error404 />} />
      </Switch>
    </React.Fragment>
  );
};
