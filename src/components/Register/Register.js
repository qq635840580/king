import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Register.less';
import Logo from '../img/logo.jpg';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user';

class Register extends Component {
    reg = () => {
    this.props.reg({username: this.username.value, password: this.password.value});
  };

  render() {
    return (
      <div className="register">
        <img src={Logo} alt="logo"/>
        <ul className="list01">
          <li><input type="text" placeholder="用户名/手机号：" ref={(element) => {
            this.username = element
          }}/></li>
          <li>
            <input type="password" placeholder="请输入密码：" ref={(element) => {
              this.password = element
            }}/>
          </li>
        </ul>
        <ul className="btn">
          <li onClick={this.reg}>注册</li>
          <li><Link to={'/User'}>退出</Link></li>
          <li className="btn-n">{this.props.user.err}</li>
        </ul>
      </div>
    )
  }
}

export default connect(state => ({...state}), action)(Register)