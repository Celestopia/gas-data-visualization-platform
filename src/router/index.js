import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/visualization',
      name: 'Visualization',
      component: () => import('../views/VisualizationView.vue'),
    },
    {
      path: '/comparison',
      name: 'Comparison',
      component: () => import('../views/ComparisonView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue'),
    },
  ],
})

export default router
