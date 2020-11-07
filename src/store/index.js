/*
 * @Description: 
 * @version: 
 * @Author: Kevin Shen
 * @Date: 2020-10-09 20:27:52
 * @LastEditors: Kevin Shen
 * @LastEditTime: 2020-10-09 20:30:03
 */
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (reducer, composeEnhancers (
  applyMiddleware (thunk)
));

export default store;