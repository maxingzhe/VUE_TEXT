import Mock from 'mockjs'
import data from './datahome.json'

Mock.mock('/focusList',{code:0,data:data.focusList})
