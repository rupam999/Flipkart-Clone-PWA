import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { userCheck } from '../../../components/userCheck';
import { Store } from '../../../Context/Store';
import { getData } from '../../../localStorage/getData';
import Colors from '../../../utils/Colors';
import Loader from '../components/mobileLoader';
import { HeaderWithoutTitle } from '../Header/HeaderWithoutTitle';

export const ProductDetails = () => {
    const [loading, setLoading] = useState(true);
    const [productDetails, setProductDetails] = useState<any>();
    const { setUser } = useContext(Store);
    const history = useHistory();
    const location = useLocation();
    const loggedUser = getData('user');

    useEffect(() => {
        let product;
        if(userCheck(history) && location.state){
          setUser(loggedUser);
          product = location.state;
          setProductDetails(product.productInformation);
          setLoading(false);
        } else if(userCheck(history) && !location.state) {
            history.push('/user')
        }
    }, []);

    console.log("DATA", productDetails)

    return(
        <React.Fragment>
        {loading ? <Loader /> :
            <div>
                <HeaderWithoutTitle left='left' productName={productDetails.name} />
                <div style={{ marginTop: 45, width: '100%', backgroundColor: Colors.white(), paddingTop: 50 }}>
                    <div style={{height: 400, width: '100%'}}>
                        <img 
                            src='https://rukminim1.flixcart.com/image/1150/1150/k70spzk0/nut-dry-fruit/h/h/h/100-californian-pouch-flipkart-supermart-select-original-imafpck6zmdfygs5.jpeg?q=90'
                            height={400}
                        />
                    </div>
                    <p>{productDetails.name}</p>
                    <p>{productDetails.price}</p>
                </div>
            </div>
        }
        </React.Fragment>
    );
}