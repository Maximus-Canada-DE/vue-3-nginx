import {
	required as defaultRequired, 
	helpers 
} from '@vuelidate/validators'
import {
	isPast 
} from 'date-fns';
import type {
	Time
} from '@/types/Forms'

const requiredMessage = 'This field is required!'

export const isPastDate = {
	$validator(value: Date) {
		return isPast(value);
	},
	$message: () => 'The date cannot be in the future!',
}

export const required = helpers.withMessage(requiredMessage, defaultRequired)

export const requiredIf = <T = any, K = any>(testFn: (value: T, state: K) => boolean, message?: string) => ({
	$validator(value: T, state: K, vm: any) {
		if (testFn(value, state)) {
			return required.$validator(value, state, vm);
		}
		return true;
	},
	$message: () => message || requiredMessage,
})

export const hasValidTime = {
	$validator(value: Time) {
		return value.minute && value.hour && value.time
	},
	$message: () => 'Enter a time.',
}