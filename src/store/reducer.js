/*
 * @Description: 
 * @version: 
 * @Author: Kevin Shen
 * @Date: 2020-10-09 20:27:57
 * @LastEditors: Kevin Shen
 * @LastEditTime: 2020-10-11 16:20:41
 */
import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from '../application/Recommend/store'
import { reducer as singersReducer } from '../application/Singer/store';
import { reducer as rankReducer } from '../application/Rank/store'

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer
});