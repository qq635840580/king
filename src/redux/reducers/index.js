import {combineReducers} from 'redux'
import home from './home'
import run from './run'
import cars from './cars'
import user from './user'
import {routerReducer} from 'react-router-redux'

export default combineReducers({
  home,
  run,
  cars,
  user,
  router:routerReducer
})