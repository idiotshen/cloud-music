/*
 * @Description: 
 * @version: 
 * @Author: Kevin Shen
 * @Date: 2020-10-09 20:32:38
 * @LastEditors: Kevin Shen
 * @LastEditTime: 2020-10-10 15:22:01
 */
import React, { useEffect, useState } from 'react'
import { SliderContainer } from './style'
import 'swiper/swiper-bundle.css';
import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

function Slider (props) {
  const [ sliderSwiper, setSliderSwiper ] = useState(null);
  const { bannerList } = props;

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delpay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });

      setSliderSwiper(newSliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <SliderContainer>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map(slider => {
              return (
                <div className="swiper-slide" key={slider.imageUrl}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  )
}

export default React.memo(Slider);
