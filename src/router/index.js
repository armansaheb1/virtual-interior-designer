import { createRouter, createWebHistory } from 'vue-router'
import layout1 from '../layouts/layout1.vue'


const routes = [{
  // Layout 2
  path: '/',
  redirect: '/',
  component: layout1,
  children: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "demo" */ '../components/pages/Index.vue')
    },
  ]
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
