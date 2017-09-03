import {get} from './index'


let url = 'http://localhost:3000'
export const getLessons = () => {
  return get(url + `/list`)
};