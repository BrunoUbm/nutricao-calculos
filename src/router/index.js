import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'calculo',
    component: () => import('../views/PageCalc.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
