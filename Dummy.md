import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userCheck } from '../../../components/userCheck';
import { Store } from '../../../Context/Store';
import { getData } from '../../../localStorage/getData';
import { EditSearchHeader } from '../Header';
import Loader from '../components/mobileLoader';

export const EditSearchBar = () => {
    const [loading, setLoading] = useState(true);
    const { setUser } = useContext(Store);
    const history = useHistory();
    const loggedUser = getData('user');

    useEffect(() => {
        if(userCheck(history)){
          setUser(loggedUser);
          setLoading(false);
        }
    }, []);

    return(
        <React.Fragment>
        {loading ? <Loader /> :
            <div>
                <EditSearchHeader />
            </div>
        }
        </React.Fragment>
    );
}