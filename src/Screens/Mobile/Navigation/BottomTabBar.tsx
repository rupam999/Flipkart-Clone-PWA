import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import Colors from '../../../utils/Colors';
import { HomeScreen } from '../Content';
import './bottomTabStyle.css';

export const BottomTabBar = () => {
    const [selectedTab, setSelectedTab] = useState('homeTab');
    const [hidden, setHidden] = useState(false);

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
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="My"
                key="my"
                selected={selectedTab === 'redTab'}
                onPress={() => {
                setSelectedTab('redTab');
                }}
                >
                <p>Second Tab Content</p>
            </TabBar.Item>
            
            <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="My"
                key="my"
                selected={selectedTab === 'greenTab'}
                onPress={() => {
                setSelectedTab('greenTab');
                }}
                >
                <p>Third Tab Content</p>
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