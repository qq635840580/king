let initState={
    userInfo:{},
    err:"",
};
import * as types from '../action-types';
export default function (state=initState,action) {
    switch (action.type){
        case types.SET_ERROR:
            return {...state,err:action.err};
        case types.SET_USER_INFO:
            return {...state,userInfo:action.userInfo,err:''}
    }
    return state
}