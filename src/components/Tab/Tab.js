import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import '../../common/index.less'

export default class Tab extends Component {
  render() {
    return (
      <nav className="footer">
        <NavLink to={'/'} exact activeClassName="selected">
          <i className="iconfont icon-home_fill_light"></i>
          <span>首页</span>
        </NavLink>
        <NavLink to={'/run'} exact activeClassName="selected">
          <i className="iconfont icon-wefill"></i>
          <span>动态</span>
        </NavLink>
        <NavLink to={'/news'} exact activeClassName="selected">
          <i className="iconfont icon-messagefill"></i>
          <span>消息</span>
        </NavLink>
        <NavLink to={'/shopping'} exact activeClassName="selected">
          <i className="iconfont icon-cart"></i>
          <span>购物车</span>
        </NavLink>
        <NavLink to={'/user'} exact activeClassName="selected">
          <i className="iconfont icon-myfill"></i>
          <span>我的</span>
        </NavLink>
      </nav>
    )
  }
}
