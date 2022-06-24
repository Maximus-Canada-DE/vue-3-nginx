import type {
	Validation
} from '@vuelidate/core';

export const beforeContinue = (v$: Validation<any, any>) => {
	v$.$touch();
	return v$.$validate();
}