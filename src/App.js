/*
 * @Description: 
 * @version: 
 * @Author: Kevin Shen
 * @Date: 2020-10-08 13:19:03
 * @LastEditors: Kevin Shen
 * @LastEditTime: 2020-10-09 20:31:22
 */
import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont'
import { GlobalStyle } from './style';
import routes from './routes'
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import store from './store';
import { Provider } from 'react-redux';
import { Data } from './application/Singer/data'

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <Data>
          { renderRoutes(routes) }
        </Data>
      </HashRouter>
    </Provider>
  )
}
