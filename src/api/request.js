/*
 * @Description: 
 * @version: 
 * @Author: Kevin Shen
 * @Date: 2020-10-11 15:57:15
 * @LastEditors: Kevin Shen
 * @LastEditTime: 2020-10-19 22:25:31
 */
import { axiosInstance } from './config'

export const getBannerRequest = () => {
  return axiosInstance.get('/banner');
}

export const getRecommendListRequest = () => {
  return axiosInstance.get('/personalized')
}