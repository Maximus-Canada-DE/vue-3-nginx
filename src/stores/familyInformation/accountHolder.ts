import { defineStore } from 'pinia'

export const useAccountHolderStore = defineStore({
  id: 'counter',
  state: () => ({
    firstname: "Kyle",
    lastname: "Witherspoon",
    birthdate: null,
  }),
})
