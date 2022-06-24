import {
	defineStore 
} from 'pinia';
import {
	required,
	hasValidTime
} from '@/validators/validators';

export const useRandomStore = defineStore({
	id: 'random',
	state: () => ({
		favouriteColour: '',
		time: null,
	}),
	getters: {
		vuelidations: () => ({
			time: {
				required: hasValidTime,
			},
			favouriteColour: {
				required,
			},
		}),
	},
});
