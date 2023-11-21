import { createRouter, createWebHistory } from 'vue-router'

// Importe os componentes necessários
import App from '@/App.vue'
import NotFound from '@/views/NotFound.vue'
import Index from '@/views/Index.vue'
import CustomerIndex from '@/views/customers/CustomerIndex.vue'
import CustomerCreate from '@/views/customers/CustomerCreate.vue'
import CustomerUpdate from '@/views/customers/CustomerUpdate.vue'

// Defina suas rotas
const routes = [
  {
    path: '/',
    component: Index,
    name: 'home',
  },
  {
    path: '/customers',
    component: CustomerIndex,
    name: 'customers',
  },
  {
    path: '/customers/create',
    component: CustomerCreate,
    name: 'customers-create',
  },
  {
    path: '/customers/:id',
    component: CustomerUpdate,
    name: 'customers-update',
  },
  // Rota para a página 404
  {
    path: '/:catchAll(.*)',
    component: NotFound,
    name: 'not-found',
  },
]

// Crie uma instância do VueRouter
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Exporte o router para ser utilizado na sua aplicação Vue
export default router
