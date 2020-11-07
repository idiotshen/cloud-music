import React from 'react'
import { renderRoutes } from "react-router-config";
import { Top, Tab, TabItem } from './style';
import { NavLink } from "react-router-dom";

function Layout (props) {
  const { route } = props;

  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <Tab>
          <NavLink to="/user" activeClassName="selected">我的</NavLink>
          <NavLink to="/recommend" activeClassName="selected">发现</NavLink>
          <NavLink to="/hotWell" activeClassName="selected">云村</NavLink>
          <NavLink to="/video" activeClassName="selected">视频</NavLink>
        </Tab>
        <span className="iconfont menu">&#xe62b;</span>
      </Top>
      { renderRoutes(route.routes) }
    </div>
  )
}

export default React.memo(Layout);