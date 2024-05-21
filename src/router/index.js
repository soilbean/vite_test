import * as VueRouter from 'vue-router'
import { GetRouteList } from '../api/api.js'
import { onBeforeMount } from 'vue'

let routeReady = false

const router = VueRouter.createRouter({
    history:VueRouter.createWebHistory(),
    routes:[
        // {
        //     path:'/',
        //     name:'home',
        //     redirect:'/homePage',
        //     component:() => import("@/components/home/home.vue"),
        //     children:[
        //         {
        //             path:'/homePage',
        //             name:'homePage',
        //             component:() => import("@/components/content/homePage.vue")
        //         },
        //         {
        //             path:'/pageTwo',
        //             name:'pageTwo',
        //             component:() => import("@/components/content/pageTwo.vue")
        //         },
        //         {
        //             path:'/wordsPage',
        //             name:'wordsPage',
        //             component:() => import('@/components/content/wordsPage.vue')
        //         },
        //         {
        //             path:'/pageThree',
        //             name:'pageThree',
        //             component:() => import('@/components/content/pageThree.vue'),
        //             meta:{
        //                 requiresAuth: true
        //             }
        //         },
        //         {
        //             path:'/pubuliu',
        //             name:'pubuliu',
        //             component:() => import('@/components/content/pubuliu.vue')
        //         },
        //         {
        //             path:'/pageFour',
        //             component:() => import("@/components/content/pageFour.vue")
        //         },
        //     ],
        //     meta:{
        //         requiresAuth: true
        //     },
        // },
        
        // {
        //     path:'/login',
        //     name:'login',
        //     component:() => import("@/components/login/login.vue"),
        // }
    ]
})

const RouteArr = []
// 动态添加路由函数
function addDynamicRoutes(e) {
    e.forEach(route => {
        console.log(route)
        router.addRoute(route)
        RouteArr.push(route)
        console.log(RouteArr)
        routeReady = true
    })
    console.log('1')
}

// 获取路由信息表
function List(){
    GetRouteList().then(res => {
        addDynamicRoutes(res.data)
        // router.options.routes =  res.data
        console.log('2')
    }).catch((err) => {
        console.log(err)
    })
}

List()
router.beforeEach((to,from,next) => {
    
    let isAuthenticated = localStorage.getItem('token')


    if( to.path != '/login' && !isAuthenticated) {
        next({ name:'login' }) 
        console.log('判断登录')
    }else{
        next()
        console.log(isAuthenticated == null)
        console.log('判断未登录')
    }

})
export default router