import {post,get} from './index';

let url='http://localhost:3000';
// 注册接口
export const regs=(userInfo)=>{
    return post(url+'/Register',userInfo)
};

// 验证是否登录
export const auths=()=>{
    return get(url+'/auth');
};

// 登录接口
export const logins=(userInfo)=>{
    return post(url+'/Login',userInfo)
};
export const signouts = () => {
   return get(url + '/signout')
}
