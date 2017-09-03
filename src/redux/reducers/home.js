import * as types from '../action-types'

let initState = {
  sliders: [],
  index: {
    indexLists: [],
    hasMore: true,
    limit: 4,
    offset: 0,
    isLoading: false
  },
};
export default function (state = initState, action) {
  switch (action.type) {
    case types.GET_SLIDERS:
      return {...state, sliders: action.sliders}
    case types.GET_LISTS:
      return {
        ...state,
        index: {
          ...state.index,
          hasMore: action.hasMore,
          indexLists: [...state.index.indexLists, ...action.indexLists],
          offset: state.index.offset + action.indexLists.length,
          isLoading: false
        }
      };
    case types.GET_LOADING:
      return {
        ...state, index: {...state.index, isLoading: true}
      }
  }
  return state
}