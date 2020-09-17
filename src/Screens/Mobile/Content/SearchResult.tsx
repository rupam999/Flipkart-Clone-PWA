import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { userCheck } from '../../../components/userCheck';
import { Store } from '../../../Context/Store';
import { getData } from '../../../localStorage/getData';
import { SearchHeader } from '../Header';
import SortAndFilter from './components/SortAndFilter';
import SeperateGrocery from './components/SeperteGrocery';
import Loader from '../components/mobileLoader';
import { getProducts } from '../../../api/getProducts';
import './components/css/SortAndFilter.css';

export const SearchResult = () => {
    const [loading, setLoading] = useState(true);
    const [pageLoader, setPageLoader] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const { setUser } = useContext(Store);
    const history = useHistory();
    const loggedUser = getData('user');
    const location = useLocation();
    const [userQuery, setUserQuery] = useState('');

    const getProductsData = async () => {
        setPageLoader(true)
        const response = await getProducts();
        if(response !== 1) {
            setSearchResult(response);
            setPageLoader(false);
        }
    }

    useEffect(() => {
        let searchText;
        if(userCheck(history)){
            setUser(loggedUser);
            setLoading(false)
            searchText = location.state;
            setUserQuery(searchText.searchData);
            getProductsData();
        }
    }, []);

    return(
        <React.Fragment>
        {loading ? <Loader /> :
            <div>
                <SearchHeader searchData={userQuery} />
                {pageLoader ? <Loader /> :
                <div>
                    <SortAndFilter /> 
                    <div style={{marginTop: 90}}>
                        {searchResult.map((productDetails, index) => 
                            <SeperateGrocery key={index} productInformation={productDetails} />
                        )}
                    </div>
                </div>
                }
            </div>
        }
        </React.Fragment>
    );
}