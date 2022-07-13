import {
	defineStore 
} from 'pinia';
import {
	required,
	requiredIf,
	isPastDate
} from '@/validators/validators'

interface SpouseState {
	hasSpouse: null | string,
	firstname: string,
	lastname: string,
	birthdate: null | Date,
}

export const useSpouseStore = defineStore({
	id: 'spouse',
	state: () => ({
		hasSpouse: null,
		firstname: '',
		lastname: '',
		birthdate: null,
	}),
	getters: {
		vuelidations: () => ({
			birthdate: {
				required: requiredIf<string, SpouseState>((_value, state) => state.hasSpouse === 'Y'),
				isPastDate,
			},
			firstname: {
				required: requiredIf<string, SpouseState>((_value, state) => state.hasSpouse === 'Y'),
			},
			lastname: {
				required: requiredIf<string, SpouseState>((_value, state) => state.hasSpouse === 'Y'),
			},
		}),
	},
});
