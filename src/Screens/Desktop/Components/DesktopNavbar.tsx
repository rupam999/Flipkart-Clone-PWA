import React from 'react';
import DesktopCategoryNavbar from './DesktopCategoryNavbar';
import DesktopTopNavbar from './DesktopTopNavbar';

const DesktopNavbar = () => {
    return(
        <div style={{width: '100%'}}>
            <DesktopTopNavbar />
            <DesktopCategoryNavbar />
        </div>
    );
}

export default DesktopNavbar;