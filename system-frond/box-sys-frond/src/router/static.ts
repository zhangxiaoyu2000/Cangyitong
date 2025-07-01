import {RouteRecordRaw} from 'vue-router'
export default [
    {
        path:"/",
        name:"login",
        component:()=>import("@/views/pages/login/login.vue")
    },{
        path:"/error",
        name:"error",
        component:()=>import("@/views/pages/404/404.vue")
    }
]