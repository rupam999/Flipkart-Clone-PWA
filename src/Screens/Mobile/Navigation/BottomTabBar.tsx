import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import {
    HomeOutlined,
    UserOutlined,
    BellOutlined,
    HeartOutlined,
} from '@ant-design/icons';
import { userCheck } from '../../../components/userCheck';
import { Store } from '../../../Context/Store';
import { getData } from '../../../localStorage/getData';
import { HomeScreen, Wishlist, Notification, Profile } from '../Content';
import Loader from '../components/mobileLoader';
import Colors from '../../../utils/Colors';
import './bottomTabStyle.css';

export const BottomTabBar = () => {
    const [selectedTab, setSelectedTab] = useState('homeTab');
    const [loading, setLoading] = useState(true);
    const { setUser } = useContext(Store);
    const loggedUser = getData('user');
    const history = useHistory();
    useEffect(() => {
        if (userCheck(history)) {
            setUser(loggedUser);
            setLoading(false);
        }
    }, []);

    if (!loggedUser) {
        return <Loader />;
    }

    return (
        <div
            style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}
        >
            {loading ? (
                <Loader />
            ) : (
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
                        selectedIcon={
                            <HomeOutlined
                                className="bottomTabIcon"
                                twoToneColor={Colors.darkBlue()}
                            />
                        }
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
                        selectedIcon={
                            <HeartOutlined
                                className="bottomTabIcon"
                                twoToneColor={Colors.darkBlue()}
                            />
                        }
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
                        selectedIcon={
                            <BellOutlined
                                className="bottomTabIcon"
                                twoToneColor={Colors.darkBlue()}
                            />
                        }
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
                        selectedIcon={
                            <UserOutlined
                                className="bottomTabIcon"
                                twoToneColor={Colors.darkBlue()}
                            />
                        }
                        title="Profile"
                        key="profile"
                        selected={selectedTab === 'profileTab'}
                        onPress={() => {
                            setSelectedTab('profileTab');
                        }}
                    >
                        <Profile />
                    </TabBar.Item>
                </TabBar>
            )}
        </div>
    );
};
