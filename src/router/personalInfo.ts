import AccountHolderView from '@/views/family-information/AccountHolder.vue'
import SpouseView from '@/views/family-information/Spouse.vue'
import type { Route } from '@/types/routes'

const baseUrl = '/family-information'

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
  }
] as Route[];