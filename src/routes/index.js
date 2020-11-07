/*
 * @Description: 
 * @version: 
 * @Author: Kevin Shen
 * @Date: 2020-10-08 13:41:26
 * @LastEditors: Kevin Shen
 * @LastEditTime: 2020-11-01 12:57:07
 */
import React from 'react';
import { Redirect } from "react-router-dom";
import Layout from '../application/Layout';
import Recommend from '../application/Recommend';
import HotWell from '../application/HotWell';
import Video from '../application/Video';
import User from '../application/User';
import Singer from '../application/Singer';

export default [
  {
    path: "/",
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => (
          <Redirect to={"/user"}/>
        )
      },
      {
        path: '/user',
        component: User
      },
      {
        path: '/recommend',
        component: Recommend
      },
      {
        path: '/hotWell',
        component: Singer
      },
      {
        path: '/video',
        component: Video
      }
    ]
  }
]