import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { userCheck } from '../../../components/userCheck';
import { Store } from '../../../Context/Store';
import { getData } from '../../../localStorage/getData';
import { SearchHeader } from '../Header';
import SortAndFilter from './components/SortAndFilter';
import SeperateGrocery from './components/SeperteGrocery';
import Loader from '../components/mobileLoader';
import './components/css/SortAndFilter.css';

export const SearchResult = () => {
    const [loading, setLoading] = useState(true);
    const { setUser } = useContext(Store);
    const history = useHistory();
    const loggedUser = getData('user');
    const location = useLocation();
    const [userQuery, setUserQuery] = useState('');

    useEffect(() => {
        let searchText;
        if(userCheck(history)){
            setUser(loggedUser);
            setLoading(false);
            searchText = location.state;
            setUserQuery(searchText.searchData);
        }
    }, []);

    return(
        <React.Fragment>
        {loading ? <Loader /> :
            <div>
                <SearchHeader searchData={userQuery} />
                <SortAndFilter /> 
                <div style={{marginTop: 90}}>
                    <SeperateGrocery />
                    <SeperateGrocery />
                    <SeperateGrocery />
                </div>
            </div>
        }
        </React.Fragment>
    );
}