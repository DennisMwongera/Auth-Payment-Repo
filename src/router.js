import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import Login from '@/components/Login.vue'
import Subscribe from '@/components/Subscribe.vue'
import Signin from '@/components/Signin.vue'
import ProductView from '@/components/ProductView.vue'
import BlogView from '@/components/BlogView.vue'
import ReadBlog from '@/components/ReadBlog.vue'
import ForgotPassword from '@/components/ForgotPassword.vue'

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
    },
    {
        path: '/blog',
        name: 'BlogView',
        component: BlogView
    },
    {
        path: '/blog_post',
        name: 'ReadBlog',
        component: ReadBlog
    },
    {
        path: '/resetpass',
        name: 'ForgotPassword',
        component: ForgotPassword
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

