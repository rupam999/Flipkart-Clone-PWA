import React from 'react';
import { useParams } from 'react-router-dom';
import DesktopFooter from '../Components/DesktopFooter';
import DesktopNavbar from '../Components/DesktopNavbar';

export const DesktopDetailProductPage = (props) => {
    const { productId } = useParams<{productId: any}>();

    return(
        <div style={{width: '100%'}}>
            <DesktopNavbar />
            <div style={{margin: 100}}>
                <p>{productId}</p>
            </div>
            <DesktopFooter />
        </div>
    );
}