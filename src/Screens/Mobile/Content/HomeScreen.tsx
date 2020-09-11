import React, {useState} from 'react';
import { NavBar, Icon, Drawer } from 'antd-mobile';
import { HomeScreenHeaer, SearchBoxSecondHeader } from '../Header';
import WindowDimensions from '../../../components/WindowDimensions';

export const HomeScreen = () => {
    const [menu, toggle] = useState(false);
    const {width} = WindowDimensions();

    const onOpenChange = () => {
        toggle(!menu);
    }
    
    const sidebar = (
        <div style={{ width: width*.80 }}>
            <p>This is a Drawer</p>
        </div>
    )

    return(
        <div 
            style={{
                width: '100%', 
                minHeight: '100%',
            }}>
            
            <Drawer
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight }}
                enableDragHandle
                // contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                sidebar={sidebar}
                open={menu}
                onOpenChange={onOpenChange}
                >
                <HomeScreenHeaer menu={menu} toggle={toggle} />
                <SearchBoxSecondHeader />
                <div style={{paddingTop: 100}}>
                    <p>Home Screen Content</p>
                </div>
            </Drawer>

        </div>
    );
}