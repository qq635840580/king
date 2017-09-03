import * as Types from '../action-types';
let initState={
      carsList:[],
};
export default function(state=initState,action){
    switch(action.type){
        case Types.GET_CARS:
            return {
                ...state,
                carsList:action.cars.carList,
            };
        case Types.INCREASE:
            return {
                ...state,
                carsList:state.carsList.map((item,index)=>{
                    return {...item,number:item.id==action.id?item.number+1:item.number}
                })
            };
        case Types.DECREASE:
            return {
                ...state,
                carsList:state.carsList.map((item,index)=>{
                    return {...item,number:item.id==action.id?item.number-1:item.number}
                })
            };
        case Types.TOGGLE_TODO:
            return{
                ...state,
                carsList:state.carsList.map((item,index)=>{
                    return {...item,checked:item.id==action.id?!item.checked:item.checked}
                })
            };
        case Types.TOGGLE_ALL:
            return{
                ...state,
                carsList:state.carsList.map((item,carsList)=>{
                    return {...item,checked:action.checked}
                })

            };
        case Types.DEL_TODOS:
            return{
                carsList:state.carsList.filter((item,index)=>item.id!==action.id)
            }
     }
    return state;
}
