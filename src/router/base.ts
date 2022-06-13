import Home from '@/views/Home.vue'
import type { Route } from '@/types/routes'

export default [
  {
    path: `/`,
    component: Home,
  },
] as Route[];