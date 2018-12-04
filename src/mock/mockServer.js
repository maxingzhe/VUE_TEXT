import Mock from 'mockjs'
import data from './datahome.json'
import detail from './datanav.json'
import bannerpic from './datashiwu.json'
//首屏
Mock.mock('/focusList',{code:0,data:data.focusList})
Mock.mock('/newItemNewUserList',{code:0,data:data.newItemNewUserList})
Mock.mock('/popularItemList',{code:0,data:data.popularItemList})
Mock.mock('/topicList',{code:0,data:data.topicList})
Mock.mock('/cateList',{code:0,data:data.cateList})
//第二屏
Mock.mock('/categoryL1List',{code:0,data:detail.categoryL1List})
//识物
Mock.mock('/banner',{code:0,data:bannerpic.banner})
Mock.mock('/column',{code:0,data:bannerpic.column})
Mock.mock('/recommendOne',{code:0,data:bannerpic.recommendOne})
Mock.mock('/recommendTwo',{code:0,data:bannerpic.recommendTwo})
Mock.mock('/recommendThree',{code:0,data:bannerpic.recommendThree})
Mock.mock('/tenfifteen',{code:0,data:bannerpic.tenfifteen})

Mock.mock('/zhenOne',{code:0,data:bannerpic.zhenOne})
Mock.mock('/zhenTwo',{code:0,data:bannerpic.zhenTwo})
Mock.mock('/zhenThree',{code:0,data:bannerpic.zhenThree})

Mock.mock('/yxLook',{code:0,data:bannerpic.yxLook})
Mock.mock('/yxWeek',{code:0,data:bannerpic.yxWeek})
