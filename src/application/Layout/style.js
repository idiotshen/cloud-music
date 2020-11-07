/*
 * @Description: 
 * @version: 
 * @Author: Kevin Shen
 * @Date: 2020-10-08 13:41:12
 * @LastEditors: Kevin Shen
 * @LastEditTime: 2020-10-09 15:08:47
 */
import styled from 'styled-components'
import style from '../../assets/global-style'

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style["background-color"]};
  &>span {
    line-height: 40px;
    color: black;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`

export const Tab = styled.div`
  height: 44px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: black;
    text-align: center;
    &.selected {
        padding: 3px 0;
        font-weight: 700;
    }
  }
`
export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
