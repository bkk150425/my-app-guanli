import Mock from 'mockjs'
import home from './mockServeData/home'

// 定义mock请求拦截 

Mock.mock('/api/home/getData', function() {
    // 拦截到请求后的处理逻辑

    console.log('mock拦截到请求')
    return home.getStatisticalData()
})