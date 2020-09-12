import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import { HomeOutlined, UserOutlined, BellOutlined, HeartOutlined } from '@ant-design/icons';
import Colors from '../../../../utils/Colors';
import { HomeScreen, Wishlist, Notification } from '../Content';
import './bottomTabStyle.css';

export const BottomTabBar = () => {
    const [selectedTab, setSelectedTab] = useState('homeTab');

    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          tabBarPosition="bottom"
          hidden={false}
          prerenderingSiblingsNumber={0}
        >
            
            <TabBar.Item
                icon={<HomeOutlined className="bottomTabIcon" />}
                selectedIcon={<HomeOutlined className="bottomTabIcon" twoToneColor={Colors.darkBlue()} />}
                title="Home"
                key="home"
                selected={selectedTab === 'homeTab'}
                onPress={() => {
                setSelectedTab('homeTab');
                }}
                >
                <HomeScreen />
            </TabBar.Item>

            <TabBar.Item
                icon={<HeartOutlined className="bottomTabIcon" />}
                selectedIcon={<HeartOutlined className="bottomTabIcon" twoToneColor={Colors.darkBlue()} />}
                title="Wishlist"
                key="wishlist"
                selected={selectedTab === 'wishlistTab'}
                onPress={() => {
                setSelectedTab('wishlistTab');
                }}
                >
                <Wishlist />
            </TabBar.Item>
            
            <TabBar.Item
                icon={<BellOutlined className="bottomTabIcon" />}
                selectedIcon={<BellOutlined className="bottomTabIcon" twoToneColor={Colors.darkBlue()} />}
                title="Notification"
                key="notification"
                selected={selectedTab === 'notificationTab'}
                onPress={() => {
                setSelectedTab('notificationTab');
                }}
                >
                <Notification />
            </TabBar.Item>

            <TabBar.Item
                icon={<UserOutlined className="bottomTabIcon" />}
                selectedIcon={<UserOutlined className="bottomTabIcon" twoToneColor={Colors.darkBlue()} />}
                title="Profile"
                key="profile"
                selected={selectedTab === 'profileTab'}
                onPress={() => {
                setSelectedTab('profileTab');
                }}
                >
                <p>Profile Tab Content</p>
            </TabBar.Item>
        </TabBar>
      </div>
    );
}