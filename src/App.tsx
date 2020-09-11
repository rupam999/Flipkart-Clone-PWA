import React from 'react';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import WindowDimensions from './components/WindowDimensions';
import { BottomTabBar } from './Screens/Mobile/Navigation';

const App = () => {
  const {width, height} = WindowDimensions();
  if(width > 900){
    return (
      <Router>
        <p>Desktop Device Screen</p>
      </Router>
    );
  } else {
    return (
      <Router>
        {/* Mobile Device Screen */}
        <BottomTabBar />
      </Router>
    );
  }
}

export default App;
