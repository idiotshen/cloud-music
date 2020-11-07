/*
 * @Description: 
 * @version: 
 * @Author: Kevin Shen
 * @Date: 2020-10-08 13:41:22
 * @LastEditors: Kevin Shen
 * @LastEditTime: 2020-10-19 22:26:30
 */
import React, { useEffect } from 'react';
import Slider from '../../components/slider';
import { Content } from './style';
import Scroll from '../../components/scroll'
import RecommendList from '../../components/list'
import * as actionTypes from './store/actionCreator'
import { connect } from "react-redux";
import { forceCheck } from "react-lazyload";
import Loading from '../../baseUI/loading/index';

function Recommend (props) {
  const { bannerList, recommendList, enterLoading } = props;

  const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

  useEffect(() => {
    if (!bannerList.size) {
      getBannerDataDispatch();
    }

    if (!recommendList.size) {
      getRecommendListDataDispatch();
    }
  }, [bannerList.size, getBannerDataDispatch, getRecommendListDataDispatch, recommendList.size])

  const bannerListJS = bannerList ? bannerList.toJS () : [];
  const recommendListJS = recommendList ? recommendList.toJS () :[];

  return (
    <Content>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
      { enterLoading ? <Loading></Loading> : null}
    </Content>
  )
}

const mapStateToProps = (state) => ({
  bannerList: state.getIn (['recommend', 'bannerList']),
  recommendList: state.getIn (['recommend', 'recommendList']),
  enterLoading: state.getIn(['recommend', 'enterLoading'])
});

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch () {
      dispatch (actionTypes.getBannerList ());
    },
    getRecommendListDataDispatch () {
      dispatch (actionTypes.getRecommendList ());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo (Recommend));