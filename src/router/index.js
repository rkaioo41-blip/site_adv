import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicial from '../paginas/PaginaInicial.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: PaginaInicial,
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../paginas/Sobre.vue'),
  },
  {
    path: '/areas',
    name: 'areas',
    component: () => import('../paginas/Areas.vue'),
  },
  {
    path: '/equipe',
    name: 'equipe',
    component: () => import('../paginas/Equipe.vue'),
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import('../paginas/Contato.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
