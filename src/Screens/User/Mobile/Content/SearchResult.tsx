import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchHeader } from '../Header';
import SortAndFilter from './components/SortAndFilter';
import './components/css/SortAndFilter.css';
import SeperateGrocery from './components/SeperteGrocery';

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
            <div style={{marginTop: 90}}>
                <SeperateGrocery />
                <SeperateGrocery />
                <SeperateGrocery />
            </div>
        </div>
    );
}