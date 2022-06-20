import { defineStore } from 'pinia';

export const useAccountHolderStore = defineStore({
	id: 'accountHolder',
	state: () => ({
		firstname: 'Kyle',
		lastname: 'Witherspoon',
	}),
});
