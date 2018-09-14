
export default [
  {path: '/', component: () => import('pages/Home')},
  {path: '/Work', component: () => import('pages/Work')},
  {path: '/Contact', component: () => import('pages/Contact')},
  {path: '/Info', component: () => import('pages/Info')},

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
