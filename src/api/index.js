import ajax from './ajax'
//首页轮播
export const reqBannerPic = () =>ajax('/focusList')
//新品发布
export const reqNewArrival = () =>ajax('/newItemNewUserList')
//首页人气
export const reqPopularity = () =>ajax('/popularItemList')
//首页精选
export const reqSfit = () =>ajax('/topicList')
//首页详情
export const reqCateList = () =>ajax('/cateList')
//第二屏
export const reqCategoryL1List = () =>ajax('/categoryL1List')
//识物
export const reqBanner = () =>ajax('/banner')
//识物
export const reqColumn= () =>ajax('/column')
//推荐
export const reqRecommendOne= () =>ajax('/recommendOne')
export const reqRecommendTwo= () =>ajax('/recommendTwo')
export const reqRecommendThree= () =>ajax('/recommendThree')
//对话框
export const reqTenfifteen= () =>ajax('/tenfifteen')

export const reqZhenOne= () =>ajax('/zhenOne')
export const reqZhenTwo= () =>ajax('/zhenTwo')
export const reqZhenThree= () =>ajax('/zhenThree')

export const reqYxLook= () =>ajax('/yxLook')
export const reqYxWeek= () =>ajax('/yxWeek')
