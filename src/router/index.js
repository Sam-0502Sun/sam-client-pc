import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index')
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../views/goods/goods-index')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
