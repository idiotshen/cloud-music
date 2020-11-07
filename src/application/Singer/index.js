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
import { NavContainer } from "./style";

function Singers () {
  const [category, setcategory] = useState('')
  const [alpha, setAlpha] = useState('')

  let handleUpdateAlpha = (val) => {
    setAlpha(val);
  }

  let handleUpdateCategory = (val) => {
    setcategory(val);
  }

  return (
    <NavContainer>
      <Horizon list={categoryTypes} title={"分类(默认热门):"} handleClick={handleUpdateCategory} oldVal={category}></Horizon>
      <Horizon list={alphaTypes} title={"首字母:"} handleClick={handleUpdateAlpha} oldVal={alpha}></Horizon>
    </NavContainer>
  )
}

export default React.memo(Singers);