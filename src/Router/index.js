import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/Home')
const Home = () => import('@/components/Leads')
const Home = () => import('@/components/admin')
const Home = () => import('@/components/work')
const Home = () => import('@/components/contact')
const Home = () => import('@/components/team')
const Home = () => import('@/components/quotes')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/leads',
      name: 'leads',
      component: Leads
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: Quotes
    }
  ]
})
