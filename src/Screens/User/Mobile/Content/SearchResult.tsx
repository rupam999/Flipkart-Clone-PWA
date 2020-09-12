import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchHeader } from '../Header';
import SortAndFilter from './components/SortAndFilter';
import './components/css/SortAndFilter.css';

export const SearchResult = () => {
    const location = useLocation();
    const [userQuery, setUserQuery] = useState('');
    let searchText;
    useEffect(() => {
        searchText = location.state;
        setUserQuery(searchText.searchData);
    });

    return(
        <div>
            <SearchHeader searchData={userQuery} />
            <SortAndFilter />
            <div style={{marginTop: 101}}>
                <p>Search Result</p>
                <p>You are Searching for {userQuery}</p>
            </div>
        </div>
    );
}