import React, {Component} from 'react';
import {render} from 'react-dom'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Tab from "./components/Tab/Tab";
import App from "./components/App/App";
import Home from "./components/Home/Home";
import Run from "./components/Run/Run";
import News from "./components/News/News";
import Shopping from "./components/Shopping/Shopping";
import User from "./components/User/User";
import {Provider} from 'react-redux'
import store from './redux/store'
import Detail from "./containers/detail/Detail";
import TalkAbout from './components/TalkAbout/TalkAbout';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createHashHistory'

let history = createHistory();
import PrivateRoute from './PrivateRoute'

window._store = store;


render(<Provider store={store}>
  <ConnectedRouter history={history}>
    <Switch>
      <App>
        <Tab/>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/run"} exact component={Run}/>
        <Route path={"/news"} exact component={News}/>
        <PrivateRoute path={"/shopping"} exact component={Shopping}/>
        <Route path={"/user"} exact component={User}/>
        <Route path={"/detail"} component={Detail}/>
        <Route path={"/talkabout"} exact component={TalkAbout}/>
        <Route path={"/Register"} exact component={Register}/>
        <Route path={"/Login"} exact component={Login}/>
      </App>
    </Switch>

  </ConnectedRouter></Provider>, document.getElementById('root'));
