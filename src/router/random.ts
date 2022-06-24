import RandomView from '@/views/random/RandomView.vue';
import Review from '@/views/random/ReviewView.vue';
import type {
	Route 
} from '@/types/routes';

const baseUrl = '/random';

export default [
	{
		path: `${baseUrl}`,
		name: 'Random',
		title: 'Random Questions',
		component: RandomView,
	},
	{
		path: `${baseUrl}/review`,
		name: 'Review',
		title: 'Review',
		component: Review,
	},
] as Route[];
