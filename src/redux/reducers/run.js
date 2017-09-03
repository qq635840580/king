import * as types from '../action-types'

let initState = {
  hasMore:true,
  Lists: []
};
export default function (state = initState, action) {
  switch (action.type) {
    case types.GET_LIST:
      return {
        ...state,
        hasMore: action.lesson.hasMore,
        Lists: [...state.Lists, ...action.lesson.Lists],
      };
    case types.ADD_LIKE:
      state.Lists.forEach((item,index)=>{
        if(index==action.index){
          item.like=action.like;
          item.flag=!item.flag;
        }
        index==action.index?item.like=action.like:null;
      });
      return {
        ...state,
        Lists:[...state.Lists],
      };
    case types.ADD_PERSON:
      state.Lists.forEach((item,index)=>{
        index==action.index?item.person=action.person:null;
      });
      return {
        ...state,
        Lists:[...state.Lists],
      };
  }
  return state
}