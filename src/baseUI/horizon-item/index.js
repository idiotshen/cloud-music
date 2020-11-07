/*
 * @Description: 
 * @version: 
 * @Author: Kevin Shen
 * @Date: 2020-10-24 10:52:21
 * @LastEditors: Kevin Shen
 * @LastEditTime: 2020-11-01 13:00:28
 */
import React, { useState, useRef, useEffect, memo } from 'react';
import styled from'styled-components';
import Scroll from '../../components/scroll';
import { PropTypes } from 'prop-types';
import style from '../../assets/global-style';

function Horizon(props) {
  const { list, oldVal, title } = props;
  const { handleClick } = props;
  const Category = useRef(null);

  useEffect(() => {
    let categoryDOM = Category.current;
    let tagElems = categoryDOM.querySelectorAll("span");
    let totalWidth = 0;

    Array.from(tagElems).forEach(ele => {
      totalWidth += ele.offsetWidth;
    })

    categoryDOM.style.width = `${totalWidth}px`;
  }, [])

  return (
    <Scroll direction={"horizental"}>
      <div ref={Category}>
        <List>
          <span>{title}</span>
          {
            list.map((item) => {
              return (
                <ListItem
                  key={item.key} className={`${oldVal === item.key} ? 'selected' : ''`}
                  onClick={() => handleClick(item.key)}>
                    {item.name}
                </ListItem>
              )
            })
          }
        </List>
      </div>
    </Scroll>
  )
}

Horizon.defaultProps = {
  list: [],
  oldVal: '',
  title: '',
  handleClick: null
}

Horizon.propTypes = {
  list: PropTypes.array,
  oldVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func
}

const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  >span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: ${style["font-size-m"]};
    vertical-align: middle;
  }
`
const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style["font-size-m"]};
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    color: ${style["theme-color"]};
    border: 1px solid ${style["theme-color"]};
    opacity: 0.8;
  }
`

export default React.memo(Horizon);