import { defineStore } from 'pinia'

export const useSpouseStore = defineStore({
  id: 'counter',
  state: () => ({
    firstname: "Sarah",
    lastname: "Witherspoon",
    birthdate: new Date(),
  }),
})
