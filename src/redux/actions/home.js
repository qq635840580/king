import * as types from '../action-types'
import {getSliders, getLists} from '../../api/home'
import {getLessons} from '../../api/run'
import {getCars} from '../../api/car';


//home  陆晨阳
export const getSlider = () => (dispatch) => {
  getSliders().then(sliders => {
    dispatch({type: types.GET_SLIDERS, sliders})
  })
};
export const getList = () => (dispatch, getState) => {
  let {index: {hasMore, offset, limit}} = getState().home;
  if (!hasMore) return;
  // dispatch({type:types.GET_LOADING});
  getLists(offset, limit).then(indexLists => {
    dispatch({type: types.GET_LISTS, ...indexLists})
  })
};



//run 李欣伟
export const getLesson = () => (dispatch) => {
  // let {currentLesson,lesson:{hasMore}}=getState();
  // if(!hasMore)return;
  getLessons().then(lesson => {
    dispatch({type: types.GET_LIST, lesson})
  })
};
export const addLike = (like, index) => {
  //console.log(like,111);
  return {
    type: types.ADD_LIKE,
    like: like + 1,
    index,

  }
};
export const addPerson = (person, index) => {
  //console.log(person,222)
  return {
    type: types.ADD_PERSON,
    person: person,
    index
  }
};

//car 贺雅楠
export const getCar=()=>(dispatch)=>{
  return getCars().then(cars=>{
    dispatch({
      type:types.GET_CARS,
      cars,
    })
  });
};

//点击按钮使其取反
export const toggleTodo=(id)=>{
  return{
    type:types.TOGGLE_TODO,
    id
  }
};
export const toggleAll=(checked)=>{
  console.log(checked);
  return{
    type:types.TOGGLE_ALL,
    checked
  }
};
export const increase=(id)=>{
  return{
    type:types.INCREASE,
    id
  }
};
export const decrease=(id)=>{
  return{
    type:types.DECREASE,
    id
  }
};
export const delTodos=(id)=>{
  return{
    type:types.DEL_TODOS,
    id
  }
};











