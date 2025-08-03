import {RouteRecordRaw} from 'vue-router'
import Home from '@/views/pages/home/home.vue'
export default [
    {
        path:"/",
        name:"login",
        component:()=>import("@/views/pages/login/login.vue")
    },{
        path:"/error",
        name:"error",
        component:()=>import("@/views/pages/404/404.vue")
    },{
        path:"/home",
        name:"home",
        component:Home
    }
]