/*
 * @Description: 
 * @version: 
 * @Author: Kevin Shen
 * @Date: 2020-10-11 13:26:11
 * @LastEditors: Kevin Shen
 * @LastEditTime: 2020-10-19 22:01:21
 */
import React from 'react';
import { getCount } from '../../api/util'
import LazyLoad from 'react-lazyload'

import {
  ListWrapper,
  ListItem,
  List
} from './style';

export default function RecommendList (props) {
  return (
    <ListWrapper>
      <h1 className="title"> 推荐歌单 </h1>
      <List>
        {
          props.recommendList.map ((item, index) => {
            return (
              <ListItem key={item.id + index}>
                <div className="img_wrapper">
                  <div className="decorate"></div>
                    {/* 加此参数可以减小请求的图片资源大小 */}
                    <LazyLoad placeholder={<img width="100%" height="100%" src={require ('./music.png')} alt="music"/>}>
                      <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>
                    </LazyLoad>
                  <div className="play_count">
                    <i className="iconfont play">&#xe885;</i>
                    <span className="count">{getCount (item.playCount)}</span>
                  </div>
                </div>
                <div className="desc">{item.name}</div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  )
}