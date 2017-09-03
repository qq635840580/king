//接口
import {get} from './index';
let url='http://localhost:3000';
export const getCars=()=>{
  return get(url+'/car');
};











