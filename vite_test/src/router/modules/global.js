export const dynamicRoutes = [
    {
        path:'/',
        name:'home',
        redirect:'/homePage',
        component:() => import("@/components/home/home.vue"),
        children:[
            {
                path:'/homePage',
                name:'homePage',
                component:() => import("@/components/content/homePage.vue")
            },
            {
                path:'/pageTwo',
                name:'pageTwo',
                component:() => import("@/components/content/pageTwo.vue")
            },
            {
                path:'/wordsPage',
                name:'wordsPage',
                component:() => import('@/components/content/wordsPage.vue')
            },
            {
                path:'/pageThree',
                name:'pageThree',
                component:() => import('@/components/content/pageThree.vue'),
                meta:{
                    requiresAuth: true
                }
            },
            {
                path:'/pubuliu',
                name:'pubuliu',
                component:() => import('@/components/content/pubuliu.vue')
            },
            {
                path:'/pageFour',
                component:() => import("@/components/content/pageFour.vue")
            },
        ],
        meta:{
            requiresAuth: true
        },
    },
    
    {
        path:'/login',
        name:'login',
        component:() => import("@/components/login/login.vue"),
        
    }
]

