import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/pages/Home.vue';
import Biodata from './components/pages/Biodata.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/biodata',
    name: 'Biodata',
    component: Biodata,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;