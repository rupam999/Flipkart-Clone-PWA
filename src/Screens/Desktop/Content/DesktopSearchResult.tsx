import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DesktopFooter from '../Components/DesktopFooter';
import DesktopNavbar from '../Components/DesktopNavbar';

export const DesktopSearchResult = () => {
    const { searchName } = useParams<{ searchName: any }>();

    return(
        <div>
            <DesktopNavbar />
            <div style={{height: 500}}>
                <p>Hello World! {searchName}</p>
            </div>
            <DesktopFooter />
        </div>
    );
}