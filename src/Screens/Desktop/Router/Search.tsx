import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DesktopDetailProductPage, DesktopSearchResult } from '../Content';

const Search = () => {
  return(
    <Router>
      <Route exact path="/Search/:searchName" component={DesktopSearchResult} />
      <Route exact path="/Search/fullDetails/:productId" component={DesktopDetailProductPage} />
    </Router>
  );
}

export default Search;
