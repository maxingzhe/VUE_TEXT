import {
  reqNewArrival,
  reqPopularity,
  reqSfit,
  reqCateList,
  reqCategoryL1List,
  reqBanner,
  reqColumn,
  reqRecommendOne,
  reqRecommendTwo,
  reqRecommendThree,
  reqTenfifteen,
  reqZhenOne,
  reqZhenTwo,
  reqZhenThree,
  reqYxLook,
  reqYxWeek
}from '../api'
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
}from './mutation-type'
export default {
  //新品首发
  async getNewArrival({commit}){
    const result = await reqNewArrival()
    if(result.code===0){
      const newArrival = result.data
      commit(GET_NEWARRIVAL,{newArrival})
    }
  },
  //首页人气
  async getPopularity({commit}){
    const result = await reqPopularity()
    if(result.code===0){
      const popularity = result.data
      commit(GET_POPULARITY,{popularity})
    }
  },
  //首页精选
  async getSfit({commit}){
    const result = await reqSfit()
    if(result.code===0){
      const sfit = result.data
      commit(GET_SFIT,{sfit})
    }
  },
  //首页详情
  async getCateList({commit}){
    const result = await reqCateList()
    if(result.code===0){
      const cateList = result.data
      commit(GET_CATELIST,{cateList})
    }
  },
  //第二屏
  async getCategoryL1List({commit}){
    const result = await reqCategoryL1List()
    if(result.code===0){
      const categoryL1List = result.data
      commit(GET_CATEGORYL1LIST,{categoryL1List})
    }
  },
  //点击求索引
  async getCurrentIndex({commit},index){
      commit(GET_CURRENT_INDEX,{index})
  },
  //识物
  async getBanner({commit}){
    const result = await reqBanner()
    if(result.code===0){
      const banner = result.data
      commit(GET_BANNER,{banner})
    }
  },
  async getColumn({commit}){
    const result = await reqColumn()
    if(result.code===0){
      const column = result.data
      commit(GET_COLUMN,{column})
    }
  },
  //推荐
  async getRecommendOne({commit}){
    const result = await reqRecommendOne()
    if(result.code===0){
      const recommendOne = result.data
      commit(GET_RECOMMENDONE,{recommendOne})
    }
  },
  async getRecommendTwo({commit}){
    const result = await reqRecommendTwo()
    if(result.code===0){
      const recommendTwo = result.data
      commit(GET_RECOMMENDTWO,{recommendTwo})
    }
  },
  async getRecommendThree({commit}){
    const result = await reqRecommendThree()
    if(result.code===0){
      const recommendThree = result.data
      commit(GET_RECOMMENDTHREE,{recommendThree})
    }
  },
  //对话框
  async getTenfifteen({commit}){
    const result = await reqTenfifteen()
    if(result.code===0){
      const tenfifteen = result.data
      commit(GET_TENFIFTEEN,{tenfifteen})
    }
  },
  //臻品
  async getZhenOne({commit}){
    const result = await reqZhenOne()
    if(result.code===0){
      const zhenOne = result.data
      commit(GET_ZHENONE,{zhenOne})
    }
  },
  async getZhenTwo({commit}){
    const result = await reqZhenTwo()
    if(result.code===0){
      const zhenTwo = result.data
      commit(GET_ZHENTWO,{zhenTwo})
    }
  },
  async getZhenThree({commit}){
    const result = await reqZhenThree()
    if(result.code===0){
      const zhenThree = result.data
      commit(GET_ZHENTHREE,{zhenThree})
    }
  },
  async getYxLook({commit}){
    const result = await reqYxLook()
    if(result.code===0){
      const yxLook = result.data
      commit(GET_YXLOOK,{yxLook})
    }
  },
  async getYxWeek({commit}){
    const result = await reqYxWeek()
    if(result.code===0){
      const yxWeek = result.data
      commit(GET_YXWEEK,{yxWeek})
    }
  }
}

