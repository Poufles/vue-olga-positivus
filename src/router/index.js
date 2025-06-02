import Test from '@/sandbox/Test.vue';
import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Home View Routes
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      redirect: { name: 'home' }
    },
    // VISUALISATIONS OF COMPONENTS
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ],
});

export default router;