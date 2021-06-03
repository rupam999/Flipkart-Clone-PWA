import React from 'react';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import WindowDimensions from './components/WindowDimensions';
import { StoreProvider } from './Context/Store';
import { Login, Register, VerifyOTP, UserInformationForm } from './Screens/Mobile/SignInFlow';
import { MainNavigation } from './Screens/Mobile/Navigation';
import { DesktopDealsOfTheDay, DesktopHomeScreen, DesktopShoppingCart } from './Screens/Desktop/Content';
import Search from './Screens/Desktop/Router/Search';

const App = () => {
  const {width} = WindowDimensions();
  if(width > 900){
    return (
      <StoreProvider>
        <Router>
          <Route exact path="/" component={DesktopHomeScreen} />
          <Route path="/Search" component={Search} />
          <Route exact path="/DealsOfTheDay" component={DesktopDealsOfTheDay} />
          <Route exact path="/desktopCart" component={DesktopShoppingCart} />
        </Router>
      </StoreProvider>
    );
  } else {
    {/* Mobile Device Screen */}
    return (
      <StoreProvider>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/verifyOTP" component={VerifyOTP} />
          <Route exact path="/information" component={UserInformationForm} />
          <Route path="/user" component={MainNavigation} />
        </Router>
      </StoreProvider>
    );
  }
}

export default App;
