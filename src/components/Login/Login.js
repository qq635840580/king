import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user'
import {Link} from 'react-router-dom'
import './Login.less';

class Login extends Component {
  constructor() {
    super();
    this.state = {username: '', password: ''}
  }

  componentWillMount() {
    this.props.validate();
  }

  login = () => {
    console.log(this.state.username,this.state.password)
    this.props.login(this.state)
  };

  render() {
    return (
      <div className="login">
        <div>
          <span className="login-in">账户登录</span>
        </div>
        <div className="login-pf">
          <span>账户</span>
          <input className="username" type="text" placeholder="输入账号.." value={this.state.username}
                 onChange={(e) => this.setState({username: e.target.value})}/>
        </div>
        <div className="login-fp">
          <span>登录密码</span>
          <input className="password" type="password" placeholder="请输入密码" value={this.state.password}
                 onChange={(e) => this.setState({password: e.target.value})}/>
        </div>
        <div className="login-button-left">
          <button onClick={this.login}>登&nbsp;&nbsp;&nbsp;录</button>
        </div>
        <div className="login-button-right">
          <button><Link to={"/Register"}>注册</Link></button>
        </div>
        <div className="err">{this.props.user.err}</div>

      </div>
    )
  }
}

export default connect(state => ({...state}), action)(Login)