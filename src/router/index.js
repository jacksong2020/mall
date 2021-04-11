import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
  path: '',
  component: () => import('../views/index/index')
}, {
  path: '/home',
  component: () => import('../views/index/index')
}, {
  path: '/store',
  component: () => import('../views/store/Store')
}, {
  path: '/config',
  component: () => import('../views/config/Config')
}, {
  path: '/me',
  component: () => import('../views/me/Me')
}, {
  path: '/video',
  component: () => import('../views/video/Video')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
