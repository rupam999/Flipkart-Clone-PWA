import React from 'react';
import DESKTOP404 from '../../../assets/Desktop404.png';
import './css/Desktop404Style.css';

const Desktop404 = () => {
    return(
        <div>
            <div className="Desktop404Container">
                <img src={DESKTOP404} className="Desktop404Image" alt="404_Image" />
                <h3>Sorry, no results found!</h3>
                <p>Please check the spelling or try searching for something else</p>
            </div>
        </div>
    );
}

export default Desktop404;