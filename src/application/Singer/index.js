/*
 * @Description: 
 * @version: 
 * @Author: Kevin Shen
 * @Date: 2020-11-01 12:30:58
 * @LastEditors: Kevin Shen
 * @LastEditTime: 2020-11-01 12:56:00
 */
import React, {useState} from 'react';
import Horizon from '../../baseUI/horizon-item';
import { categoryTypes, alphaTypes } from '../../api/config';
import { 
  NavContainer,
  ListContainer,
  List,
  ListItem
} from "./style";
import {
  getSingerList,
  getHotSingerList,
  changeEnterLoading,
  changePageCount,
  refreshMoreHotSingerList,
  changePullUpLoading,
  changePullDownLoading,
  refreshMoreSingerList
} from './store/actionCreators'
import Scroll from '../../components/scroll';
import { useEffect } from 'react'
import { connect } from 'react-redux';
import Loading from '../../baseUI/loading';
import { CategoryDataContext, CHANGE_ALPHA, CNHANE_CATEGORY } from './data'

function Singers (props) {
  const { data, dispatch } = useContext(CategoryDataContext)
  const { category, alpha } = data.toJS();

  const { 
    updateDispatch, 
    singerList, 
    getHotSingerList, 
    pullUpRefreshDispatch, 
    pullDownRefreshDispatch,
    pullUpLoading,
    pullDownLoading,
    enterLoading,
    pageCount
  } = props;

  useEffect(() => {
    getHotSingerList();
  }, []);

  const renderSingerList = () => {
    return (
      <List>
        {
          singerList.map((item, index) => {
            return (
              <ListItem key={item.accountId + "" + index}>
                <div className="img_wrapper">
                  <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music"/>
                </div>
                <span className="name">{item.name}</span>
              </ListItem>
            )
          })
        }
      </List>
    )
  }

  const handlePullUp = () => {
    pullUpRefreshDispatch(category, alpha, category === '', pageCount);
  }

  const handlePullDown = () => {
    pullDownRefreshDispatch (category, alpha);
  }


  let handleUpdateAlpha = (val) => {
    dispatch({ type: CHANGE_ALPHA, data: val })
    updateDispatch(category, val);
  }

  let handleUpdateCategory = (val) => {
    dispatch ({type: CHANGE_CATEGORY, data: val});
    updateDispatch(val, alpha);
  }

  return (
    <div>
      <NavContainer>
        <Horizon list={categoryTypes} title={"分类(默认热门):"} handleClick={handleUpdateCategory} oldVal={category}></Horizon>
        <Horizon list={alphaTypes} title={"首字母:"} handleClick={handleUpdateAlpha} oldVal={alpha}></Horizon>
      </NavContainer>
      <ListContainer>
        <Loading show={enterLoading}></Loading>
        <Scroll
          pullUp = {handlePullUp}
          pullDown = {handlePullDown}
          pullUpLoading = {pullUpLoading}
          pullDownLoading = {pullDownLoading}
        >
          { renderSingerList () }
        </Scroll>
      </ListContainer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  singerList: state.getIn(['singers', 'singerList']).toJS(),
  enterLoading: state.getIn(['singers', 'enterLoading']),
  pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
  pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
  pageCount: state.getIn(['singers', 'pageCount'])
});

const mapDispatchToProps = (dispatch) => {
  return {
    getHotSingerList() {
      dispatch(getHotSingerList());
    },
    updateDispatch(category, alpha) {
      dispatch(changePageCount(0));
      dispatch(changeEnterLoading(true));
      dispatch(getSingerList(category, alpha));
    },
    // 滑到最底部刷新处理
    pullUpRefreshDispatch(category, alpha, hot, count) {
      dispatch(changePullUpLoading(true));
      dispatch(changePageCount(count + 1));
      if (hot) {
        dispatch(refreshMoreHotSingerList());
      } else {
        dispatch(refreshMoreSingerList(category, alpha));
      }
    },
    // 顶部下拉刷新
    pullDownRefreshDispatch(category, alpha) {
      dispatch(changePullDownLoading(true));
      dispatch(changePageCount(0));//属于重新获取数据
      if(category === '' && alpha === ''){
        dispatch(getHotSingerList());
      } else {
        dispatch(getSingerList(category, alpha));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers));