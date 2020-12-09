import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Subscribe from '@/components/Subscribe.vue'

Vue.use(Router)

const constantRoutes = [
    {
        path: '/',
        name: 'Subscribe',
        component: Subscribe
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]


const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

  const router = createRouter()

  export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
  }
  
  export default router

