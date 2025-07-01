import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import staticRoute from './static'
const routes: Array<RouteRecordRaw> = [
    ...staticRoute
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router