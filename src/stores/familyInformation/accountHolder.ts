import {
	defineStore 
} from 'pinia';
import {
	required 
} from '@/validators/validators';
import {
	minLength 
} from '@vuelidate/validators';

export const useAccountHolderStore = defineStore({
	id: 'accountHolder',
	state: () => ({
		firstname: '',
		lastname: '',
	}),
	getters: {
		vuelidations: () => ({
			firstname: {
				required,
				minLength: minLength(4),
			},
			lastname: {
				required,
			},
		}),
	},
});
