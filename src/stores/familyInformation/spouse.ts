import { defineStore } from 'pinia';

export const useSpouseStore = defineStore({
  id: 'spouse',
  state: () => ({
    firstname: 'Sarah',
    lastname: 'Witherspoon',
    birthdate: new Date(),
  }),
});
