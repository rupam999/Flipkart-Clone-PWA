import React, {useState} from 'react';
import { Drawer } from 'antd-mobile';
import { HomeScreenHeader, SearchBoxSecondHeader } from '../Header';
import WindowDimensions from '../../../components/WindowDimensions';
import DrawerContent from './components/DrawerContent';
import HomeScreenSlide from './components/HomeScreenSlide';

export const HomeScreen = () => {
    const [menu, toggle] = useState(false);
    const {width} = WindowDimensions();

    const onOpenChange = () => {
        toggle(!menu);
    }
    
    const sidebar = (
        <div style={{ width: width*.75, maxWidth: 290 }}>
            <DrawerContent />
        </div>
    )

    return(
        <div 
            style={{
                width: '100%', 
                minHeight: '100%',
                zIndex:1,
            }}>
            
            <Drawer
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight }}
                enableDragHandle
                sidebar={sidebar}
                open={menu}
                onOpenChange={onOpenChange}
                >
                <HomeScreenHeader menu={menu} toggle={toggle} pageHeading="E-commerce" />
                <SearchBoxSecondHeader />
                <div style={{paddingTop: 101}}>
                    <HomeScreenSlide />
                    <p>Home Screen Content</p>
                </div>
            </Drawer>

        </div>
    );
}