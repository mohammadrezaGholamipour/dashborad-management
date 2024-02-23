import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/default-layout.vue'
import HomeView from '@/views/HomeView.vue'
/////////////////////////////
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DefaultLayout',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'HomeView',
          component: HomeView
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
