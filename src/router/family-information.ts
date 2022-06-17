import AccountHolderView from '@/views/family-information/AccountHolder.vue';
import SpouseView from '@/views/family-information/Spouse.vue';
import ChildView from '@/views/family-information/Child.vue';
import Review from '@/views/family-information/Review.vue';
import type { Route } from '@/types/routes';

const baseUrl = '/family-information';

export default [
  {
    path: `${baseUrl}/account-holder`,
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
