import {
	required as defaultRequired, 
	helpers 
} from '@vuelidate/validators'

// Wrapper to customize generic messages 
export const required = helpers.withMessage('You have to answer the question fool', defaultRequired)