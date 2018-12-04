/**
 * Created by Lenovo on 2018/12/1.
 */
import {
  GET_NEWARRIVAL,
  GET_POPULARITY,
  GET_SFIT,
  GET_CATELIST,
  GET_CATEGORYL1LIST,
  GET_CURRENT_INDEX,
  GET_BANNER,
  GET_COLUMN,
  GET_RECOMMENDONE,
  GET_RECOMMENDTWO,
  GET_RECOMMENDTHREE,
  GET_TENFIFTEEN,
  GET_ZHENONE,
  GET_ZHENTWO,
  GET_ZHENTHREE,
  GET_YXLOOK,
  GET_YXWEEK
} from './mutation-type'

export default {
  [GET_NEWARRIVAL](state,{newArrival}){
    state.newArrival = newArrival
  },
  [GET_POPULARITY](state,{popularity}){
    state.popularity = popularity
  },
  [GET_SFIT](state,{sfit}){
    state.sfit = sfit
  },
  [GET_CATELIST](state,{cateList}){
    state.cateList = cateList
  },
  [GET_CATEGORYL1LIST](state,{categoryL1List}){
    state.categoryL1List = categoryL1List
  },
  [GET_CURRENT_INDEX](state,{index}){
    state.currentIndex = index
  },
  [GET_BANNER](state,{banner}){
    state.banner = banner
  },
  [GET_COLUMN](state,{column}){
    state.column = column
  },
  [GET_RECOMMENDONE](state,{recommendOne}){
    state.recommendOne = recommendOne
  },
  [GET_RECOMMENDTWO](state,{recommendTwo}){
    state.recommendTwo = recommendTwo
  },
  [GET_RECOMMENDTHREE](state,{recommendThree}){
    state.recommendThree = recommendThree
  },
  [GET_TENFIFTEEN](state,{tenfifteen}){
    state.tenfifteen = tenfifteen
  },
  [GET_ZHENONE](state,{zhenOne}){
    state.zhenOne = zhenOne
  },
  [GET_ZHENTWO](state,{zhenTwo}){
    state.zhenTwo = zhenTwo
  },
  [GET_ZHENTHREE](state,{zhenThree}){
    state.zhenThree = zhenThree
  },
  [GET_YXLOOK](state,{yxLook}){
    state.yxLook = yxLook
  },
  [GET_YXWEEK](state,{yxWeek}){
    state.yxWeek = yxWeek
  }
}
