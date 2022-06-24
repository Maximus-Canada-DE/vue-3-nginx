import defaultUseVuelidate from '@vuelidate/core';
import type {
	Ref,
	ToRefs
} from 'vue';
import type {
	ValidationArgs
} from '@vuelidate/core';
import {
	computed 
} from 'vue';

export default <
  T extends {[key in keyof Vargs]: any},
  Vargs extends ValidationArgs = ValidationArgs,
>(
	validationsArgs: Vargs,
	state: T | Ref<T> | ToRefs<T>
) => {
	const reactiveRules = computed(() => validationsArgs);
	const v$ = defaultUseVuelidate(reactiveRules, state, {
		$autoDirty: true,
	});

	return v$
}
