import {
	defineStore 
} from 'pinia';
import {
	required
} from '@/validators/validators'

export const useSpouseStore = defineStore({
	id: 'spouse',
	state: () => ({
		firstname: '',
		lastname: '',
		birthdate: null,
	}),
	getters: {
		vuelidations: () => ({
			firstname: {
				required,
			},
			lastname: {
				required,
			},
		}),
	},
});
