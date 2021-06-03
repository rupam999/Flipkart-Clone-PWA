import React, {useContext} from 'react';
import { Store } from '../../../Context/Store';
import DesktopEmptyCart from '../Components/DesktopEmptyCart';
import DesktopFooter from '../Components/DesktopFooter';
import DesktopNavbar from '../Components/DesktopNavbar';

export const DesktopShoppingCart = () => {
    const {user} = useContext(Store);
    return(
        <div>
            <DesktopNavbar />
            <div>
                {user && user.id ? (
                    <p>hjkhk</p>
                ) : (
                    <DesktopEmptyCart 
                        heading='Missing Cart items?'
                        text='Login to see the items you added previously'
                    />
                )}
            </div>
            <DesktopFooter />
        </div>
    );
}