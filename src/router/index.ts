import {
	createRouter, createWebHistory 
} from 'vue-router';
import personalInfoRoutes from './family-information';
import randomRoutes from './random';
import baseRoutes from './base';

const routes = [
	...personalInfoRoutes,
	...randomRoutes,
	...baseRoutes,
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
