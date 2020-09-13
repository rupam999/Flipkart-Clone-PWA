import React from 'react';
import { HeaderWithBack } from '../Header';
import CartMainBody from './components/CartMainBody';

export const ShoppingCart = () => {
    return(
        <React.Fragment>
            <HeaderWithBack name="My Cart" icon="left" />
            <CartMainBody />
        </React.Fragment>
    );
}