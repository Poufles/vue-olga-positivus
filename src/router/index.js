import Test from '@/sandbox/Test.vue';
import AboutView from '@/views/AboutView.vue';
import BlogView from '@/views/BlogView.vue';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import PricingView from '@/views/PricingView.vue';
import ServiceView from '@/views/ServiceView.vue';
import UseCaseView from '@/views/UseCaseView.vue';
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
    // About View Routes
    {
      path: '/about-us',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/about',
      redirect: { name: 'about' }
    },
    // Services View Routes
    {
      path: '/services',
      name: 'services',
      component: ServiceView,
    },
    {
      path: '/service',
      redirect: { name: 'services' }
    },
    // Use Cases View Routes
    {
      path: '/use-cases',
      name: 'usecases',
      component: UseCaseView,
    },
    {
      path: '/use',
      redirect: { name: 'usecases' }
    },
    {
      path: '/usecase',
      redirect: { name: 'usecases' }
    },
    {
      path: '/usecases',
      redirect: { name: 'usecases' }
    },
    // Pricing View Routes
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView,
    },
    {
      path: '/price',
      redirect: { name: 'pricing' }
    },
    {
      path: '/prices',
      redirect: { name: 'pricing' }
    },
    // Blog View Routes
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogView,
    },
    {
      path: '/blog',
      redirect: { name: 'blog' }
    },
    // Not Found Route
    {
      path: '/:catchAll(.*)',
      name: 'nf404',
      component: NotFoundView,
    },
    // VISUALISATIONS OF COMPONENTS
    {
      path: '/test',
      component: Test
    }
  ],
});

export default router;