import {regs, auths, logins, signouts} from '../../api/user';
import * as Types from '../action-types';
import util from '../../common/util';
import {push} from 'react-router-redux';

export const reg = (userInfo) => (dispatch) => {
  regs(userInfo).then(data => {
    console.log(data);
    if (data.err) {
      dispatch({
        type: Types.SET_ERROR,
        err: data.err
      })
    } else {
      util.set('user', data); //这里备用一份数据信息,以后做同步验证的时候可以使用 这个数据
      dispatch({
        type: Types.SET_USER_INFO,
        userInfo: data,
      });
      dispatch(push('/Home')); //跳转路由
    }
  })
};
// 验证是否登录
export const auth = () => (dispatch) => {
  auths().then(data => {
    if (data.username) {
      util.set('user', data); //存入到sessionStorage中
      dispatch({
        type: Types.SET_USER_INFO,
        userInfo: data
      })
    }
  });
};

export const validate = () => (dispatch) => {
  auths().then(data => {
    if (data.username) {
      util.set('user', data); //存入到sessionStorage中
      dispatch({
        type: Types.SET_USER_INFO,
        userInfo: data
      });
      dispatch(push('/Login'));
    }
  });
};

export const login = (userInfo) => (dispatch) => {
  logins(userInfo).then(data => {
    if (data.err) {
      dispatch({
        type: Types.SET_ERROR,
        err: data.err
      });
    } else {
      util.set('user', data);
      dispatch({
        type: Types.SET_USER_INFO,
        userInfo: data
      });
      dispatch(push('/user'));
    }
  })
};
export const signout = () => (dispatch) => {
  signouts().then(data => {
    util.set(null)
    dispatch(push('/home'))
  })
}

