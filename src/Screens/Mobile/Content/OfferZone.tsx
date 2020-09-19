import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userCheck } from '../../../components/userCheck';
import { Store } from '../../../Context/Store';
import { getData } from '../../../localStorage/getData';
import { HeaderWithBack } from '../Header';
import Loader from '../components/mobileLoader';

export const OfferZone = () => {
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
                <HeaderWithBack name="Today's Offers" icon="left" />
                <div style={{ marginTop: 45 }}>
                    <p>Offer Zone Content</p>
                </div>
            </div>
        }
        </React.Fragment>
    );
}