import Home from '@/views/Home.vue';
import type { Route } from '@/types/routes';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
] as Route[];
