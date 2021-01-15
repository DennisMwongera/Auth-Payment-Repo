import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import Login from '@/components/Login.vue'
import Subscribe from '@/components/Subscribe.vue'
import Signin from '@/components/Signin.vue'
import ProductView from '@/components/ProductView.vue'

Vue.use(Router)

const constantRoutes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/subscribe',
        name: 'Subscribe',
        component: Subscribe
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/productview',
        name: 'ProductView',
        component: ProductView
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

