import Home from '@/views/HomeView.vue';
import type {
	Route 
} from '@/types/routes';

export default [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
] as Route[];
