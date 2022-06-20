import AccountHolderView from '@/views/family-information/AccountHolderView.vue';
import SpouseView from '@/views/family-information/SpouseView.vue';
import ChildView from '@/views/family-information/ChildView.vue';
import Review from '@/views/family-information/ReviewView.vue';
import type { Route } from '@/types/routes';

const baseUrl = '/family-information';

export default [
	{
		path: `${baseUrl}/account-holder`,
		alias: [
			`${baseUrl}`,
		],
		name: 'Account Holder',
		title: 'Account Holder Info',
		component: AccountHolderView,
	},
	{
		path: `${baseUrl}/spouse`,
		name: 'Spouse',
		title: 'Spouse Info',
		component: SpouseView,
	},
	{
		path: `${baseUrl}/children`,
		name: 'Children',
		title: 'Child Info',
		component: ChildView,
	},
	{
		path: `${baseUrl}/review`,
		name: 'Review',
		title: 'Review',
		component: Review,
	},
] as Route[];
