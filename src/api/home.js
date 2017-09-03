import {get} from './index'

let url = 'http://localhost:3000'
export const getSliders = () => {
  return get(url + '/slider')
};

export const getLists = (offset,limit) => {
  return get(url + `/imglist/${offset}/${limit}`)
};



