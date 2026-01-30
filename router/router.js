import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
          top: 120,
        behavior: 'smooth'
      }
    }
  }
})

export default router
