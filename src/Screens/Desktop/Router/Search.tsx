import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import WindowDimensions from '../../../components/WindowDimensions';
import { StoreProvider } from '../../../Context/Store';
import { DesktopHomeScreen, DesktopSearchResult } from '../Content';

const Search = () => {
    const {width} = WindowDimensions();
    
    return(
        <Router>
          <Route exact path="/Search/:searchName" component={DesktopSearchResult} />
        </Router>
    );
}

export default Search;
