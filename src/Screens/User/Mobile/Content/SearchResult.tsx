import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchHeader } from '../Header';
import SortAndFilter from './components/SortAndFilter';
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import './components/css/SortAndFilter.css';

export const SearchResult = () => {
    const location = useLocation();
    const [userQuery, setUserQuery] = useState('');

    const [initData, setInitData] = useState<any>('');
    const [show, setShow] = useState(false);

    const onChange = (value) => {
        console.log(value);
    }

    const onOk = (value) => {
        console.log(value);
        setShow(!show);
    }

    const onCancel = () => {
        setShow(false);
    }

    const onMaskClick = () => {
        setShow(false);
    }

    const menuEl = (
        <Menu
          className="single-multi-foo-menu"
          data={initData}
          value={['1']}
          level={1}
          onChange={onChange}
          onOk={onOk}
          onCancel={onCancel}
          style={{
              position: 'fixed',
              bottom: 0,
          }}
        />
    );

    const loadingEl = (
        <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </div>
    );

    let searchText;
    useEffect(() => {
        searchText = location.state;
        setUserQuery(searchText.searchData);
    });

    return(
        <div>
            <SearchHeader searchData={userQuery} />
            <SortAndFilter show={show} setShow={setShow} initData={initData} setInitData={setInitData} />
            <div style={{marginTop: 101}} className={show ? 'single-multi-menu-active' : ''}>
            {show ? initData ? menuEl : loadingEl : null}
            {show ? <div className="menu-mask" onClick={onMaskClick} /> : null}
                <p>Search Result</p>
                <p>You are Searching for {userQuery}</p>
            </div>
        </div>
    );
}