import React, {Component} from 'react';
import profile from '../img/profile.png';
import {Link} from 'react-router-dom';
import './User.less';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user'

class User extends Component {
  componentDidMount() {
    this.props.auth();
  }

  signout = () => {
    this.props.signout();
  };

  render() {
    return (
      <div className="user">
        <div className="profile-nav">
          个人中心
        </div>
        <div className="profile">
          <img src={profile} alt="头像"/>
          {this.props.user.userInfo.username ? <button>{this.props.user.userInfo.username}</button> :
            <button><Link to={'/Login'}>登录</Link></button>}

        </div>
        <ul className="list">
          <li>
            <div className="icon">
              <i className="iconfont icon-people"></i>
            </div>
            <div className="text">我的订单</div>
          </li>
          <li>
            <div className="icon">
              <i className="iconfont icon-lishijilu"></i>
            </div>
            <div className="text">我的历史记录</div>
          </li>
          <li>
            <div className="icon">
              <i className="iconfont icon-people"></i>
            </div>
            <div className="text">关注的店铺</div>
          </li>
          <li>
            <div className="icon">
              <i className="iconfont icon-youhuijuan"></i>
            </div>
            <div className="text">优惠券</div>
          </li>
          <li>
            <div className="icon">
              <i className="iconfont icon-settings"></i>
            </div>
            <div className="text">设置</div>
          </li>
          <li>
            <div className="icon">
              <i className="iconfont icon-tuichudenglu"></i>
            </div>
            <div className="text"><a onClick={this.signout}>退出登录</a></div>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(state => ({...state}), action)(User)
