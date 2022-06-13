import { createRouter, createWebHistory } from 'vue-router'
import personalInfoRoutes from './personalInfo';
import baseRoutes from './base';

const routes = [ ...personalInfoRoutes, ...baseRoutes ]

const router = createRouter( {
  history: createWebHistory(),
  routes,
} )

export default router
