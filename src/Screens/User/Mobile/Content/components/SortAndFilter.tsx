import React, { useState } from 'react';
import { FilterOutlined, SortDescendingOutlined } from '@ant-design/icons';
import Colors from '../../../../../utils/Colors';
import './css/SortAndFilter.css';

const data = [
  {
    value: '1',
    label: 'Food',
  }, {
    value: '2',
    label: 'Supermarket',
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
  },
];

const SortAndFilter = (props) => {
    const { show, setShow, initData, setInitData } = props;

    

    

    const handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        setShow(!show);
        // mock for async data loading
        if (!initData) {
          setTimeout(() => {
            setInitData(data)
          }, 500);
        }
    }

    

    

    return(
        <div className="mainFixedDiv" style={{backgroundColor: Colors.white()}}>
            <div className="sortDiv" onClick={handleClick}>
                <h3 className="sortText">
                    <span className="iconStyle">
                        {<SortDescendingOutlined />}
                    </span>
                    <span>Sort</span>
                </h3>
            </div>
            <div className="filterDiv">
                <h3 className="filterText">
                    <span className="iconStyle">
                        {<FilterOutlined />}
                    </span>
                    <span>Filter</span>
                </h3>
            </div>
        </div>
    );
}

export default SortAndFilter;