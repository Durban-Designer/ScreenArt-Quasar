import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/Home')
const Work = () => import('@/components/work')
const Contact = () => import('@/components/contact')
const Team = () => import('@/components/team')
const Quotes = () => import('@/components/quotes')
const Leads = () => import('@/components/leads')
const Admin = () => import('@/components/admin')

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
    }
  ]
})
