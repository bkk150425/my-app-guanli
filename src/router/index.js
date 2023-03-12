
// 1.创建路由组件
// 2.将路由与组件进行映射
// 3.创建router 实例

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
    {
        path: '/',
        component: () => import('@/views/Main'),
        redirect: '/home',
        children: [
            // 子路由
            { path: '/home', component: () => import('@/views/Home') }, // 首页
            { path: '/user', component: () => import('@/views/User') }, // 用户管理
            { path: '/mall', component: () => import('@/views/Mall') }, // 商品管理
            { path: '/page1', component: () => import('@/views/PageOne') }, // 页面一
            { path: '/page2', component: () => import('@/views/PageTwo') }, // 页面二
        ]
    },

]

const router = new Router({
    routes
})


export default router


