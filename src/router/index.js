import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'clientes',
    component: () => import('../views/BuscarClientes.vue')
  },
  {
    path: '/pagecalculo',
    name: 'calculos',
    component: () => import('../views/PageCalc.vue')
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: () => import('../views/PlayList.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
